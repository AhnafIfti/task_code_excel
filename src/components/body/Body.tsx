import React from 'react';
import MostEmailed from './bodyComponents/MostEmailed';
import MostShared from './bodyComponents/MostShared';
import MostViewed from './bodyComponents/MostViewed';
import { Routes, Route } from 'react-router-dom';

const Body = () => {
    return (
        <div>
            <Routes>
                <Route path="/email" element={<MostEmailed/>} />
                <Route path="/share" element={<MostShared/>} />
                <Route path="/view" element={<MostViewed/>} />
            </Routes>
        </div>
    );
}

export default Body;