(function () {
// 公用组件   
    var Item = React.createClass({
        render: function () {
            return (
                <div className={this.props.cl} onClick={this.props.click}>
                    {this.props.select}
                </div>       
            );                    
        }
    }); 
    var controller = {
        home: {
            init: function () {
                var data = {
                    ps: {
                        img: "imgs/1.jpg",
                        name: "XXX",
                        birth: "XXX",
                        post: "XXXXX"
                    }
                };
                var PageOne = React.createClass({
                	getInitialState: function() {
                		return {
                			class: 'item-1',
		                    item: [
		                        {
		                            id: 1,
		                            select: "模块1"
		                        },
		                        {
		                            id: 2,
		                            select: "模块2"
		                        },
		                        {
		                            id: 3,
		                            select: "模块3"
		                        },
		                        {
		                            id: 4,
		                            select: "模块4"
		                        }
		                    ]
                		}
                	},
                	handleNextPage: function(i) {
                		this.setState({
                			class: 'item-2',
		                    item: [
		                        {
		                            id: 0,
		                            select: "模块0"
		                        },
		                        {
		                            id: 2,
		                            select: "模块2"
		                        },
		                        {
		                            id: 3,
		                            select: "模块3"
		                        },
		                        {
		                            id: 4,
		                            select: "模块4"
		                        }
		                    ]
                		})
                	},
                    render: function() {
                    	var items = this.state.item.map(function(every, i) {
                    		return <Item cl={this.state.class} select={every.select} key={every.id} click={this.handleNextPage.bind(this, i)} />;
                    	}.bind(this));
                        return (
                            <div className="page-1">
                                <Ps ps={this.props.data.ps} />
                                <div className='all'>
                                    {items}
                                </div>
                            </div>
                        );
                    }
                });
                var Ps = React.createClass({
                    render: function () {
                        return (
                            <div className="ps">
                                <Portrait img={this.props.ps.img} />
                                <Desc name={this.props.ps.name} birth={this.props.ps.birth} />
                                <Post post={this.props.ps.post}/>
                            </div>
                        )
                    }
                });
                var Portrait = React.createClass({
                    render: function () {
                        return (
                            <div className="portrait">
                                <img src={this.props.img} />
                            </div>
                        );
                    }
                });
                var Desc = React.createClass({
                    render: function() {
                        return (
                            <div className="desc">
                                <span>{this.props.name}</span>
                                <span>{this.props.birth}</span>
                            </div>
                        );
                    }
                });
                var Post = React.createClass({
                    render: function () {
                        return (
                            <div className="post">{this.props.post}</div>
                        )
                    }
                });
                ReactDOM.render(
                  <PageOne data={data} />,
                  document.getElementById('main-wrap-1')
                );
            }
        },
        ps_info: {
            init: function () {
                var PageOne = React.createClass({
                    render: function() {
                        return (
                            <div className="page-2">
                                <Nav />
                                <Option />
                                <Option />
                                <Option />
                                <Option />
                                <Option />
                                <Option />
                            </div>
                        );
                    }
                });
                var Nav = React.createClass({
                    render: function () {
                        return (
                            <div className="allNav">
                                <div className="navTitle">
                                    基本信息
                                </div>
                                <div className="navBar">
                                    <div className="navBar-cir">
                                    </div>
                                    <div className="navBar-1">
                                    </div>
                                    <div className="navBar-2">
                                    </div>
                                    <div className="navBar-1">
                                    </div>
                                </div>
                            </div>
                        )
                    }
                });
                var Option = React.createClass({
                    render: function () {
                        return (
                            <div className="option-1">
                            <span>姓名:</span>
                            <span>于常龙</span>
                            </div>
                        )
                    }
                });
                ReactDOM.render(
                  <PageOne />,
                  document.getElementById('main-wrap-2')
                );
            }
        }
    };
    controller.home.init();
}) ()

