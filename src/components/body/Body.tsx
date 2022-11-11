import React from 'react';
import MostEmailed from './bodyComponents/MostEmailed';
import MostShared from './bodyComponents/MostShared';
import MostViewed from './bodyComponents/MostViewed';
import { Routes, Route, Navigate } from 'react-router-dom';

const Body = () => {
    return (
        <div>
            <Routes>
                <Route path="/email" element={<MostEmailed/>} />
                <Route path="/" element={<Navigate replace to="/email" />} />
                <Route path="/share" element={<MostShared/>} />
                <Route path="/view" element={<MostViewed/>} />
            </Routes>
        </div>
    );
}

export default Body;