import React,{useEffect, useState} from 'react'

import axios from 'axios'

import StatusCard from '../components/status-card/StatusCard'

import statusCards from '../assets/JsonData/status-card-data.json'

const Dashboard = () => { 
    const[totalRenda, setTotalRenda] = useState(0);
    const[totalRenda2, setTotalRenda2] = useState(0);
    const[totalRenda3, setTotalRenda3] = useState(0);
    const[totalRenda4, setTotalRenda4] = useState(0);
   
    useEffect(async () => {
        
            const result = await axios.get('https://purple-ecommerce.herokuapp.com/produto/cadastrados/total', {headers: {
                //'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }})
            //console.log(data)
            setTotalRenda(result.data)

            const result2 = await axios.get('https://purple-ecommerce.herokuapp.com/cliente/total', {headers: {
                //'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }})
            //console.log(data)
            setTotalRenda2(result2.data)

            const result3 = await axios.get('https://purple-ecommerce.herokuapp.com/pedido/total/renda', {headers: {
                //'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }})
            //console.log(data)
            setTotalRenda3(result3.data)

            const result4 = await axios.get('https://purple-ecommerce.herokuapp.com/pedido/total', {headers: {
                //'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }})
            //console.log(data)
            setTotalRenda4(result4.data)
            
                       
            
           
               
    }, [])
    return (
        <div>
            <h2 className="page-header">Dashboard</h2>
            <div className="row">
                <div className="col-6">
                    <div className="row">
                                <div className="col-6">
                                    <StatusCard
                                        icon={statusCards[0].icon}                                        
                                        title={statusCards[0].title}
                                        price={totalRenda}
                                    />
                                </div>

                                <div className="col-6">
                                    <StatusCard
                                        icon={statusCards[1].icon}                                        
                                        title={statusCards[1].title}
                                        price={totalRenda2}
                                    />
                                </div>

                                <div className="col-6">
                                    <StatusCard
                                        icon={statusCards[2].icon}                                        
                                        title={statusCards[2].title}
                                        price={totalRenda3}
                                    />
                                </div>

                                <div className="col-6">
                                    <StatusCard
                                        icon={statusCards[3].icon}                                        
                                        title={statusCards[3].title}
                                        price={totalRenda4}
                                    />
                                </div>
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


export default Dashboard
