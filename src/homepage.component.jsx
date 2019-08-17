import React from 'react';
import './HomePage.styles.scss';

const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Item1</h1>
                    <span className='subtitle'>SubItem1</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Item2</h1>
                    <span className='subtitle'>SubItem1</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Item3</h1>
                    <span className='subtitle'>SubItem3</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Item4</h1>
                    <span className='subtitle'>SubItem4</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Item5</h1>
                    <span className='subtitle'>SubItem5</span>
                </div>
            </div>
        </div>

    </div>

);
export default HomePage;
