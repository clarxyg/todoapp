import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { List } from './components/List'
import { Pomodoro } from './components/Pomodoro'


const Router = () => {
    return (
        <Routes>
            <Route element={<List />} path="/"/>
            <Route element={<Pomodoro />} path="/pomodoro"/>
        </Routes>
    );
}

export default Router