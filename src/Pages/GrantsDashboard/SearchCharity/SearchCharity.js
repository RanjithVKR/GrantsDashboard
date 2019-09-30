import React from 'react';
import {SearchTitle,Input,Icon,Result,Filter,FilterTitle,FilterButton,Badges} from './styles'
function SearchCharity() {
    return (
        <>
           <SearchTitle>Search Charities</SearchTitle> 
           
           <div style={{position:'relative'}}>
           <Input type='text' placeholder="Search by Name, EIN, Region, Interest Area"></Input>
           <Icon className="fa fa-search" aria-hidden="true"></Icon>
           </div>
           <Filter>
               <Result>No Filters Applied</Result>
               <div>
                   <FilterTitle>Filters:</FilterTitle>
                   <FilterButton>Geography<Badges>0</Badges></FilterButton>
                   <FilterButton>Organizations<Badges>0</Badges></FilterButton>
                   <FilterButton>Financials<Badges>0</Badges></FilterButton>

               </div>

           </Filter>
        </>
    )
}

export default SearchCharity;
