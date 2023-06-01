import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getAllWallet, removeWallet } from "../../services/walletService";


export function List() {
    const wallets = useSelector(({wallets})=>{
          return wallets.list
      })
    const dispatch = useDispatch()
    const remove = (id) => {
        dispatch(removeWallet(id))
    }
    useEffect(()=>{
        dispatch(getAllWallet())
    }, []);

    return (
        <>
            {wallets && wallets.map(item => (
                <div className="col-xl-3 col-md-6 mb-4" key={item.id}>
                    <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                        <Link to={`/home/wallet/${item.id}`}></Link>
                                    </div>
                                    <a class="nav-link collapsed" data-toggle="collapse" data-target="#collapsePages"
                                        aria-expanded="true" aria-controls="collapsePages">
                                        <span>Wallet : {item.name}</span>
                                    </a>
                                    <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                                        <div class="bg-white py-2 collapse-inner rounded">
                                            <p class="collapse-item" ><Link to={`/home/transaction/${item.id}`}>See more</Link></p>
                                            <p class="collapse-item" ><Link to={`/home/updateWallet/${item.id}`}>update</Link></p>
                                            <p class="collapse-item" onClick={()=> {remove(item.id)}}>delete</p>
                                        </div>
                                    </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">${item.total}</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}