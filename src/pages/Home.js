import '../styles/Home.scss';
import Button from '../components/Button'
import Selector from '../components/Selector'
import React, { useState, useEffect } from 'react'
import Options from '../components/Options';
import {getInitialFilter, updateFilter, updateStructure} from '../assets/main'
import SideOption from '../components/SideOption';
import { Api } from '../assets/index.module.js'
import { Filters } from '../assets/filter/main'

function Home() {
    // const [filterObject, setFilterObject] = useState({});
    const [bottomFilter, setBottomFilter] = useState({});
    const [rightFilter, setRightFilter] = useState({})
    const [selectedFilter, setSelectedFilter] = useState('')

    const showOptions = (name) => {
        setSelectedFilter(name)
    }

    const splitObjects = (filterObject) => {
        let bottom = {
            structure: filterObject.structure,
            manufacturer: filterObject.manufacturer,
            class: filterObject.class,
            insulation: filterObject.insulation,
            application: filterObject.application,
            whiteGlass: filterObject.whiteGlass,
            resistance: filterObject.resistance,
            buttJoints: filterObject.buttJoints,
            sound: filterObject.sound
        }
        let right = {
            fireResistant: filterObject.fireResistant,
            spacer1: filterObject.spacer1,
            gas1: filterObject.gas1,
            middleGlass: filterObject.middleGlass,
            spacer2: filterObject.spacer2,
            gas2: filterObject.gas2,
            outsideGlass: filterObject.outsideGlass
        }
        return { bottom , right }
    }

    const selectFilter = async (option,name) => {
        setSelectedFilter('')
        let updatedObject = await updateFilter({
            name: name,
            option: option
        })
        let { bottom, right } = splitObjects(updatedObject)
        // setFilterObject(updatedObject)
        setBottomFilter(bottom)
        setRightFilter(right)
    }

    const selectStructure = async (option,name) => {
        setSelectedFilter('')
        let updatedObject = await updateStructure({
            name: name,
            option: option
        })
        let { bottom, right } = splitObjects(updatedObject)
        // setFilterObject(updatedObject)
        setBottomFilter(bottom)
        setRightFilter(right)
    }

    useEffect(() => {
        let filterObject = getInitialFilter()
        let { bottom, right } = splitObjects(filterObject)
        // setFilterObject(filterObject)
        setBottomFilter(bottom)
        setRightFilter(right)
    }, [])

    window.loaded = false
    const viewApi = Api
    const bottomKeys = Object.keys(bottomFilter)
    const rightKeys = Object.keys(rightFilter)
    return (
        <div className="home">
            <div className="home__body">
                <div className="home__navigation">
                    <label htmlFor="type">
                        <input type="radio" name="nav" id="type" />
                        glass type
                    </label>
                    <div className="vline"></div>
                    <label htmlFor="type">
                        <input type="radio" name="nav" id="cart" />
                        cart
                    </label>
                    <div className="vline"></div>
                    <label htmlFor="type">
                        <input type="radio" name="nav" id="get" />
                        get my glass
                    </label>
                </div>
                <div className="home__body-center">
                    <div className="section loader">
                        <div className="loader__progress-bar">
                            <div className="loader__progress-bar-fill">

                            </div>
                        </div>
                    </div>

                    <canvas className="home__canvas webgl-canvas"></canvas>
                </div>
                <div className="home__sidemenu">
                    <div className="home__cart">
                        <div className="sideOptions">
                            {rightKeys.map(f => <SideOption name={f} filter={rightFilter[f]} callback={selectStructure} key={f}/>)}
                        </div>
                        <Button label="add to cart" callback={()=>console.log('click button')} />
                        <span>reset confiturator</span>
                        <span>my code</span>
                    </div>
                </div>
            </div>
            {selectedFilter
                ? <Options name={selectedFilter} selected={bottomFilter[selectedFilter]} callback={selectFilter}/>
                : (
                    <div className="home__footer">
                        {bottomKeys.map(f => <Selector name={f} selected={bottomFilter[f].selected} key={f} showOptions={showOptions} options={bottomFilter[f].options}/>)}
                    </div>
                )
            }
            <div>
            {
                window.addEventListener('DOMContentLoaded', (event) => {
                    if (!window.loaded)
                    {
                        viewApi.load()

                        window.viewApi = viewApi;
                        window.loaded = true;

                        window.filters_handler = new Filters();
                        
                    }
                })
            }
            </div>
        </div>
    );
}

export default Home;
