import {getWalletIncomeExpense} from "../../../services/walletService";
import {useParams} from "react-router-dom";
import {WalletData} from "./chart";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {UpdateModal} from "./modalUpdate";


export function walletMain() {
    const dispatch = useDispatch();
    let {id} = useParams()
    const walletIncomeExpense = useSelector(({wallets})=>{
        return wallets.chart
    })
    const currentWallet = useSelector(({wallets})=>{
        return wallets.currentWallet
    })

    useEffect(()=>{
        dispatch(getWalletIncomeExpense(id));
        dispatch(getOneWallet(id))
    }, [dispatch, id])

    const [isOpen, setIsOpen] = useState(false)
    const handleModalOpen = () =>{
        setIsOpen(true)
    }
    const handleModalClose = () =>{
        setIsOpen(false)
    }

    return (
       <>
           <WalletData walletIncomeExpense={walletIncomeExpense}/>
           <UpdateModal isOpen={isOpen} onClose={handleModalClose} currentWallet={currentWallet}/>
       </>
    )


}