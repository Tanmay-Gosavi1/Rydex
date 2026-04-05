'use client'
import { setUserData } from '@/redux/slices/userSlice';
import axios from 'axios';
import {  useEffect } from 'react'
import { useDispatch } from 'react-redux';

function useGetMe(enabled: boolean) {
    const dispatch = useDispatch();
    useEffect(() => {
        if (!enabled) return;
        const fetchMe = async () =>{
            try {
                const res = await axios.get('/api/user/me');
                dispatch(setUserData(res.data.user));
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        }
        fetchMe()
    }, [enabled])
}

export default useGetMe