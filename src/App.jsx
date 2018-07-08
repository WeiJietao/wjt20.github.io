import './style/index.scss';

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from './actions';
import request from 'superagent';

import Nav from './components/Nav.jsx';
import ArticleList from './components/ArticleList.jsx';
import ArticleCont from './components/ArticleCont.jsx';

// 备用数据，如果请求接口出错，改用备用数据
const resData = [
    ...require('./../_db/md-data1.json'),
    ...require('./../_db/md-data2.json')
];

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mode: null,
            data: [],
            ifShowNav: true,
            ifShowList: true,
            ifShowCont: false,
            articleIndex: 0
        };
    }

    // 切换导航
    setShowNav = (ifShowNav = !this.state.ifShowNav) => {
        this.setState({
            ifShowNav
        });
    }

    // 切换文章列表
    setShowList = (ifShowList = !this.state.ifShowList) => {
        this.setState({
            ifShowList
        });
    }

    // 切换文章内容
    setShowCont = (
        ifShowCont = !this.state.ifShowCont,
        articleIndex = this.state.articleIndex
    ) => {
        this.setState({
            ifShowCont,
            articleIndex
        });
    }

    // TODO 递归请求多个接口数据，使用Promise更佳
    requestAllData(ary, endCallback, errorCallback, data = []) {
        if (ary.length > 0) {
            const port = ary.shift();
            request
                .get(port)
                .end((err, res) => {
                    if (err) {
                        errorCallback();
                    } else {
                        this.requestAllData(
                            ary,
                            endCallback,
                            errorCallback,
                            [...data, ...JSON.parse(res.text)]
                        );
                    }
                });
        } else {
            endCallback(data);
        }
    }

    componentWillMount() {
        const mode = window.location.hostname === 'weijietao.github.io' ? 'PROD' : 'DEV';

        console.log(3);

        if (window.localStorage._ARTICLE_) {
            // 直接从缓存中拿数据
            this.setState({
                data: JSON.parse(window.localStorage._ARTICLE_),
                mode
            })
        } else {
            // 请求接口拿数据
            this.requestAllData(
                [
                    '/_db/md-data1.json',
                    '/_db/md-data2.json'
                ],
                (data) => {
                    window.localStorage._ARTICLE_ = JSON.stringify(data);
                    this.setState({
                        data,
                        mode
                    });
                },
                () => {
                    window.localStorage._ARTICLE_ = JSON.stringify(resData);
                    this.setState({
                        data: resData,
                        mode
                    });
                }
            );
        }
    }

    render() {
        const { contentStore, setContentType } = this.props;
        const { setShowNav, setShowList, setShowCont } = this;
        const { mode,
                data,
                ifShowNav,
                ifShowList,
                ifShowCont,
                articleIndex } = this.state;

        return (
            <div className="main-container">
                <Nav mode={ mode }
                     ifShowNav={ ifShowNav } />

                <ArticleList mode={ mode }
                             data={ data }
                             ifShowList={ ifShowList }
                             ifShowCont={ ifShowCont }
                             setShowNav={ setShowNav }
                             setShowList={ setShowList }
                             setShowCont={ setShowCont } />

                <ArticleCont mode={ mode }
                             data={ data }
                             articleIndex={ articleIndex }
                             ifShowCont={ ifShowCont }
                             setShowNav={ setShowNav }
                             setShowList={ setShowList }
                             setShowCont={ setShowCont } />
            </div>
        )
    }
}

// 将state对应值绑定到props上
function mapStateToProps(state) {
    return {
        contentStore: state.contentStore,
    }
}

// 将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

// 通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
