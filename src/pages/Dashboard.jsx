import React from 'react'

import StatusCard from '../components/status-card/StatusCard'

import statusCards from '../assets/JsonData/status-card-data.json'

const Dashboard = () => {
    return (
        <div>
            <h2 className="page-header">Dashboard</h2>
            <div className="row">
                <div className="col-6">
                    <div className="row">
                        {
                            statusCards.map((item, index) => (
                                <div className="col-6">
                                    <StatusCard
                                        icon={item.icon}
                                        count={item.count}
                                        title={item.title}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="col-6">
                    <div className="card full-height">
                        {/* chart */}
                    </div>
                </div>
            </div>
        </div>
    )

}

/* async componentDidMount() {
    // GET request using fetch with async/await
    const response = await fetch('https://purple-ecommerce.herokuapp.com/pedido/total/renda');
    //const data = await response.json();
    //this.setState({ totalReactPackages: data.total })
    console.log(response.data);

    this.setState({Dashboard: response.data});
} */

/* async componentDidMount() {
    const url = "https://purple-ecommerce.herokuapp.com/pedido/total/renda";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0], loading: false });
} */


export default Dashboard
