import React from "react";
import { Link } from "react-router-dom";
import LogoutIcon from "../../src/assets/Icons/LogoutIcon";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {PiCopySimpleFill} from 'react-icons/pi';
import { useAccount, useDisconnect } from 'wagmi'
import { ToastContainer, toast } from 'react-toastify';

const UserProfile = () => {

  const { address, isConnecting ,isConnected,isDisconnected} = useAccount()
  const notify = () => toast("Referral is Copied Successfully!");

  function logout()
  {
    window.location.reload();
  }

  return (
    <div className="d-link mt-10">
    <p className="d-par">Referral Link : {window.location.origin}/?ref={address?address.slice(0,4)+"...."+address.slice(38,42):"kindly connect"}</p>
    <CopyToClipboard text={`${window.location.origin}/?ref=${address}`} >
            <button className="copy-icon flex items-center justify-center" >
            <PiCopySimpleFill color='white' className=' text-2xl'  onClick={notify}/>
            </button>

    </CopyToClipboard>  

  </div>
  );
};

export default UserProfile;
