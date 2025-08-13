"use client"
import {useState} from "react";
import Cubes from "@/app/(auth)/login/components/Cubes";
import LinesLogin from "@/app/(auth)/login/components/linesLogin";
import BarsLogin from "@/app/(auth)/login/components/barsLogin";
import FormAction from "./FormAction";

const LoginForm = () => {
    return (
        <div className={'h-screen w-screen flex justify-center'}>
            <div className={'bg-white w-1/2 p-8'}>
                <div>
                    <img src="/darkLogo.png" alt="" className={'w-40'}/>
                </div>
                <div className={'mt-24'}>
                   <FormAction/>
                </div>
            </div>
            <div className={'btn-gradient w-full flex flex-col'}>
                <div className={'flex flex-col justify-center items-center'}>
                    <Cubes
                        position={'fixed'}
                        relativeY={'-top-1'}
                        relativeX={'left-132'}
                    />
                    <LinesLogin/>
                    <BarsLogin/>
                    <Cubes
                        position={'fixed'}
                        relativeY={'top-178'}
                        relativeX={'left-384'}
                        rotate={'rotate-180'}
                    />
                </div>
                <div className={'flex flex-col justify-center items-center relative top-143'}>
                    <h3 className={'font-bold text-xl mb-2'}>Change the way you Manage Your Money</h3>
                    <p className={'text-center w-60'}>Welcome to Finrex — your smart tool for organizing and tracking your finances with ease.</p>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;