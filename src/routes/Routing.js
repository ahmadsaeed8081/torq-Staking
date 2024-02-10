import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Private from "./Private";
import Public from "./Public";
import ProtectedRoute from "../components/ProtectedRoute";
import PublicRoute from "../components/PublicRoute";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import Stacking from "../Pages/Stacking";
import { useState,useEffect } from "react";

import Home from "../Pages/Home";
import Reward from "../Pages/Reward";
import Verification from "../Pages/Verification";
import History from "../Pages/History";
import Profile from "../Pages/Profile";
import Web3 from "web3";

import {useNetwork,  useSwitchNetwork } from 'wagmi'
import { useAccount, useDisconnect } from 'wagmi'
import { cont_address,token_Address,cont_abi,token_abi } from "../components/config";
import { useContractReads,useContractRead ,useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi'
const cont_Contract = {
  address: cont_address,
  abi: cont_abi,
}
const stakeTokem_Contract = {
  address: token_Address,
  abi: token_abi,
}
const Routing = () => {
  const [loader, setLoader] = useState(false);


  const APRList = [
    { value: "0", lbl: "200 Days" ,APR: "0.5%" },
    { value: "1", lbl: "400 Days"  ,APR: "0.6%" },




  ];

  // totalReward=totalReward Total_withdraw=Total_withdraw


  const [ selectedAPR,set_selectedAPR] = useState(APRList[0])

  const [open, setOpen] = useState(false);
  const [totalRefIncome, set_totalRefIncome] = useState(0);

  
  const [expend, setExpend] = useState(false);
  const [totalReward, set_totalReward] = useState(0);
  const [Total_withdraw, set_Total_withdraw] = useState(0);
  const [TotalTeam_stake, set_TotalTeam_stake] = useState(0);
  const [totalusers, set_totalusers] = useState(0);
  const [totalbusiness, set_totalbusiness] = useState(0);


  const [totalInvestment, set_totalInvestment] = useState(0);
  const [totalEarning, set_totalEarning] = useState(0);
  const [referralLevel_count, set_referralLevel_count] = useState([]);
  const [referralLevel_stake, set_referralLevel_stake] = useState([]);

  const [referralLevel_Earning, set_referralLevel_Earning] = useState([]);
  const [regAddress, set_regAddress] = useState("");
  const [ref_add, set_ref] = useState("0x0000000000000000000000000000000000000000");

  const [TokenBalance, set_TokenBalance] = useState(0);
  const [TotalRef_earning, set_TotalRef_earning] = useState(0);

  
  const [stakeAmount, setStakedAmount] = useState(0);

  const [choosed_Unstake_inv, set_choosed_Unstake_inv] = useState();
  const [allInvestments, set_investmentList] = useState([]);
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [history, setHistory] = useState([]);
  const [directs, set_directs] = useState(0);
  const [team, set_team] = useState(0);
  const [user, set_user] = useState([]);
  const [curr_time, set_curr_time] = useState();


  const [min_stake, set_min_stake] = useState(0);
  const [minWithdraw, set_minWithdraw] = useState(0);
  const [maxWithdraw, set_maxWithdraw] = useState(0);

  // const [count, set_count] = useState(0);

  const { chain } = useNetwork()
  // const location = useLocation();
  // const params = new URLSearchParams(location.search);
  // const regAddres = params.get("address");

  const { address, isConnecting ,isDisconnected} = useAccount()
  let count=0


 
useEffect(()=>{
  if((count==0&& address!=undefined))
  {
    count++;

      test();
  }

},[address])


useEffect(()=>{

},[ref_add])
async function set_ref_func(_ref){


  set_ref(_ref)

}

  async function test(){
    setLoader(true)
    const web3= new Web3(new Web3.providers.HttpProvider("https://polygon-mumbai.g.alchemy.com/v2/Xr86iyHzmF6-yzBAqV5rd_PW7ds7QKlh"));
  
              
   const balance =await  web3.eth.getBalance(address)
    const contract=new web3.eth.Contract(cont_abi,cont_address);
    const contract1=new web3.eth.Contract(token_abi,token_Address);

    let TokenBalance = await contract1.methods.balanceOf(address).call();    
    console.log("object1");
    let min_stakeAmount = await contract.methods.minimum_investment().call();    
    let currTime = await contract.methods.get_currTime().call();    

    let totalusers = await contract.methods.totalusers().call();    
    let totalbusiness = await contract.methods.totalbusiness().call();    
    let TotalRef_earning = await contract.methods.TotalRef_earningOf(address).call();    

    console.log("object2");

    let history = await contract.methods.get_history(address).call({ from: address });    
    console.log("object3");

    let totalReward = await contract.methods.get_TotalReward().call({ from: address });   
    console.log("object4");

    let totalEarning = await contract.methods.get_totalEarning(address).call(); 
    console.log("object5");

    let referralLevel_count = await contract.methods.referralLevel_count(address).call();     
    console.log("object6");

    let referralLevel_earning = await contract.methods.referralLevel_earning(address).call();       
    console.log("object7");

    let user = await contract.methods.user(address).call();      
    console.log("object8");

    let allInvestments = await contract.methods.getAll_investments().call({from: address});
    console.log("object9");
    set_curr_time(currTime)
    setHistory(history)
    set_TokenBalance(TokenBalance);
    set_totalInvestment(user[1])
    set_totalEarning(totalEarning)
    set_referralLevel_count(referralLevel_count)
    set_totalbusiness(totalbusiness)
    set_referralLevel_Earning(referralLevel_earning)
    set_min_stake(min_stakeAmount)
    set_totalusers(totalusers)
    set_directs(user[6])
    set_team(user[7])
    set_TotalRef_earning(TotalRef_earning)
    set_investmentList(allInvestments);
    setSelectedAmount(allInvestments[0]);
    if(allInvestments[0])
    {
      set_choosed_Unstake_inv(allInvestments[0][3])

    }    
    set_totalReward(totalReward);

    setLoader(false)


  console.log("object done");
  }  

  // function setuser(_value,_arr)
  // {
  //   set_address(_value)
  //   set_ref(_arr.Ref_address)

  //   set_user(_arr)

  // }


// useEffect(()=>{
// Navigate("/")

// }

// )



  return (
    <BrowserRouter>
      <Routes>
        {/* <Route
          path="/"
          element={
            <Public>
              <Login setuser={setuser}/>
            </Public>
          }
        /> */}

        <Route >
          <Route
          exact
            path="/"
            element={
              // <ProtectedRoute>
                <Home  loader={loader}  test={test} set_ref_func={set_ref_func} TotalRef_earning={TotalRef_earning} totalbusiness={totalbusiness} totalusers={totalusers} totalRefIncome={totalRefIncome}  totalReward={totalReward} totalInvestment={totalInvestment} T totalEarning={totalEarning} directs={directs} team={team}  set_regAddress={set_regAddress}    />
              // </ProtectedRoute>
            }
          />
          {/* <Route
            path="profile"
            element={
              // <ProtectedRoute>
                <Profile user={user}/>
              // </ProtectedRoute>
            }
          /> */}
          <Route
          
            path="stacking"
            element={
              // <ProtectedRoute>
                <Stacking   isVerified={user.verified} curr_time={curr_time} min_stake={min_stake}  allInvestments={allInvestments} regAddress={regAddress} TokenBalance={TokenBalance} ref_add={ref_add} test={test}/>
              // </ProtectedRoute>
            } 
          />

          <Route
            path="history"
            element={
              // <ProtectedRoute>
                <History  history={history} />
              // </ProtectedRoute>
            }
          />
          <Route
            path="reward"
            element={
              // <ProtectedRoute>
                <Reward referralLevel_count={referralLevel_count} referralLevel_Earning={referralLevel_Earning}/>
              // </ProtectedRoute>
            }
          />
          {/* <Route
            path="verification"
            element={
              <ProtectedRoute>
                <Verification regAddress={regAddress}/>
              </ProtectedRoute>
            }
          /> */}
        </Route>
      </Routes>

    </BrowserRouter>
    
  );
};

export default Routing;
