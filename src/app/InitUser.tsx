'use client'
import useGetMe from '@/hooks/useGetMe.tsx';
import { useSession } from 'next-auth/react';

const InitUser = () => {
    const { status } = useSession()
    useGetMe(status === 'authenticated') 
    return null ;
}

export default InitUser