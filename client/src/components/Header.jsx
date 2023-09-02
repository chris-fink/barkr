import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GiDogHouse } from 'react-icons/gi';
import { FaRegCircleUser, FaRegMessage } from 'react-icons/fa';
import { useHistory } from 'react-router';

function Header() {
    const navigate = useNavigate();
    const menuItems = [
        {
            title: GiDogHouse,
            path: '/',
        }
    ]
    return (
        <div>

        </div>
    )
}

export default Header;