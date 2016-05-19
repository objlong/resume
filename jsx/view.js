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
                  document.getElementById('main-wrap')
                );
            }
        },
        page_one: {
            render: function () {
                var PageOne = React.createClass({
                    render: function() {
                        return (
                            <div className="page-1">
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
                                    基本特性
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
                            <span>特性:</span>
                            <span>A+</span>
                            </div>
                        )
                    }
                });
                ReactDOM.render(
                  <PageOne />,
                  document.getElementById('main-wrap')
                );
            }
        },
        page_two: {
        	render: function () {
        		var PageTwo = React.createClass({
        			render: function () {
        				return (
        					<div className="page-2">
        					</div>
        				);
        			}
        		});
        		ReactDOM.render(
        			<PageTwo />,
        			document.getElementById('main-wrap')
        		);
        	}
        },
        page_three: {
        	render: function () {
        		var PageThree = React.createClass({
        			render: function () {
        				return (
        					<div className="page-3">
        					</div>
        				);
        			}
        		});
        		ReactDOM.render(
        			<PageThree />,
        			document.getElementById('main-wrap')
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
        			document.getElementById('main-wrap')
        		);
        	}
        },
    };
    return view;
} (this))

