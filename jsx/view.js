var view = (function () {
// menu   
    var Item = React.createClass({
        render: function () {
            return (
                <div className={'item ' + this.props.cl} onClick={this.props.click} data-id={this.props.every.id}>
                    {this.props.every.select}
                </div>       
            );                    
        }
    }); 
    var Menu = React.createClass({
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
            var id = this.state.item[i].id;
            switch (id) {
                case 0:
                    var d = {
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
                    };
                    break;
                default:
                    var d = {
                        class: 'item-2',
                        item: [
                            {
                                id: 0,
                                select: "模块0"
                            },
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
                    };
                    break;
            }
            this.setState(d);
        },
        render: function() {
            var items = this.state.item.map(function(every, i) {
                return <Item cl={this.state.class} every={every} key={every.id} click={this.handleNextPage.bind(this, i)} />;
            }.bind(this));
            return (
                <div className='all'>
                    {items}
                </div>
            );
        }        
    });
    ReactDOM.render(
      <Menu />,
      document.getElementById('menu')
    );
    var view = {
        home: {
            render: function () {
                var data = {
                    ps: {
                        img: "imgs/1.jpg",
                        name: "XXX",
                        birth: "XXX",
                        post: "XXXXX"
                    }
                };
                var PageZero = React.createClass({
                    render: function() {
                        return (
                            <div className="page-0">
                                <Ps ps={this.props.data.ps} />
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
                  <PageZero data={data} />,
                  document.getElementById('main-wrap-0')
                );
            }
        },
        page_one: {
            render: function () {
            	var data ={
            		list:[
            			{
            				key: 1,
            				title: '基本特性',
            				info: [
            					{
            						key: 1,
            						caption: 'name',
            						content: 'xxx'
            					},
            					{
            						key: 2,
            						caption: 'name',
            						content: 'xxx'
            					},
            					{
            						key: 3,
            						caption: 'name',
            						content: 'xxx'
            					},
            					{
            						key: 4,
            						caption: 'name',
            						content: 'xxx'
            					},
            					{
            						key: 5,
            						caption: 'name',
            						content: 'xxx'
            					},
            					{
            						key: 6,
            						caption: 'name',
            						content: 'xxx'
            					},
            					{
            						key: 7,
            						caption: 'name',
            						content: 'xxx'
            					},
            					{
            						key: 8,
            						caption: 'name',
            						content: 'xxx'
            					}
            				]
            			},
            			{
            				key: 2,
            				title: '基本特性',
            				info: [
            					{
            						key: 1,
            						caption: 'name',
            						content: 'xxx'
            					},
            					{
            						key: 2,
            						caption: 'name',
            						content: 'xxx'
            					},
            					{
            						key: 3,
            						caption: 'name',
            						content: 'xxx'
            					},
            					{
            						key: 4,
            						caption: 'name',
            						content: 'xxx'
            					}
            				]
            			}
            		]
            	};
                var Nav = React.createClass({
                    render: function () {
                        return (
                            <div className="allNav">
                                <div className="navTitle">
                                    {this.props.title}
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
                            <span>{this.props.option.caption}</span>
                            <span>{this.props.option.content}</span>
                            </div>
                        )
                    }
                });
                var AllOptions = React.createClass({
                	render: function () {
                		var options = this.props.info.map(function (option) {
                			return <Option option={option} key={option.key}/>;
                		});
                		return (
                			<div className="all-options">
                				{options}
                			</div>
                		);
                	}
                });
                var Box = React.createClass({
                	render: function () {
                		return (
                			<div>
                				<Nav title={this.props.one.title} />
                				<AllOptions info={this.props.one.info} />
                			</div>
                		);
                		

                	}
                });
                var PageOne = React.createClass({
                    render: function() {
                    	var boxes = this.props.data.list.map(function (every) {
                    		return <Box one={every} key={every.key} />;
                    	});
                        return (
                            <div className="page-1">
                                {boxes}
                            </div>
                        );
                    }
                });
                ReactDOM.render(
                  <PageOne data={data} />,
                  document.getElementById('main-wrap-1')
                );
            }
        },
        page_two: {
        	render: function () {
        		var Line = React.createClass({
        			render: function () {
        				return (
        					<div className="line">
        					</div>
        				);
        			}
        		});
        		var SubNavName = React.createClass({
        			render: function () {
        				return (
        					<div className="navname-2">
        						<span>xxxx-xxxx</span>
        						<span>职业特色</span>
        						<strong className="triangle"></strong>
        					</div>        					
        				);
        			}
        		});
        		var SubNav_2 = React.createClass({
        			render: function () {
        				return (
        					<div className="subnav-2">
							<Line />
							<SubNavName />
							<Line />
							</div> 
        				);
        			}
        		});
        		var PageTwo = React.createClass({
        			render: function () {
        				return (
        					<div className="page-2">
        						<SubNav_2 />
        					</div>
        				);
        			}
        		});
        		ReactDOM.render(
        			<PageTwo />,
        			document.getElementById('main-wrap-2')
        		);
        	}
        },
        page_three: {
        	render: function () {
        		var Progress = React.createClass({
        			render: function () {
        				return (
        					<div className="pro-box">
        						<div className="percen">
        							70%
        						</div>
        						<div className="half-box left-box">
        							<div>
        							</div>
        						</div>
        						<div className="half-box right-box">
        							<div>
        							</div>
        						</div>
        					</div>
        				);
        			}
        		});
        		var PageThree = React.createClass({
        			render: function () {
        				return (
        					<div className="page-3">
        						<Progress />
        					</div>
        				);
        			}
        		});
        		ReactDOM.render(
        			<PageThree />,
        			document.getElementById('main-wrap-3')
        		);
        	}
        },
        page_four: {
        	render: function () {
        		var PageFour = React.createClass({
        			render: function () {
        				return (
        					<div className="page-4">
        					</div>
        				);
        			}
        		});
        		ReactDOM.render(
        			<PageFour />,
        			document.getElementById('main-wrap-4')
        		);
        	}
        },
    };
    return view;
} (this))

