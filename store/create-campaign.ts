import React from 'react'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import {gender,campaign_format_media,niche,age_range,influencer,campaign_format,newCampaign,campaign_goal,keyword,change_budget,change_duration,location} from "@/constants/types";
import { campaignFormats, } from '@/constants';

export interface CounterState {
  value: number
}


const initialState: newCampaign = {
    title:"",
    description:"",
    formats:null,
    metric:null,
    budget:100,
    niches:null,
    keywords:null,
    influencers:null,
    goal:null,
    start_date:null,
    end_date:null,
    audience_demographics:null
}

export const createCampaign = createSlice({
  name: 'newCampaign',
  initialState,
  reducers: {
    addFormat: (state,action:PayloadAction<campaign_format>) => {
     state.formats=[...state.formats,action.payload];
    },
    removeFormat: (state,action:PayloadAction<campaign_format>) => {
        const newFormats=state.formats.filter(format=>format!==action.payload);
      state.formats=[...newFormats];
    },
    setGoal: (state,action:PayloadAction<campaign_goal>)=>{
       state.goal=action.payload
    },
    setTitle: (state,action:PayloadAction<string>)=>{
        state.title=action.payload;
    },
    setDescription: (state,action:PayloadAction<string>)=>{
        state.description=action.payload;
    },
    addKeyword:(state,action:PayloadAction<keyword>)=>{
        state.keywords=[...state.keywords,action.payload];
    },
    setBudget:(state,action:PayloadAction<change_budget>)=>{
        state.budget=action.payload.value;
        const formatIndex=state.formats.findIndex(obj => obj.value ==action.payload.format);
        state.formats[formatIndex].budget=action.payload.format_value;
    },
    setDuration:(state,action:PayloadAction<change_duration>)=>{
        state.start_date=action.payload.start_date;
        state.end_date=action.payload.end_date;
    },
    addLocation:(state,action:PayloadAction<location>)=>{
        state.audience_demographics.locations=[...state.audience_demographics.locations,action.payload];
    },
    removeLocation:(state,action:PayloadAction<location>)=>{
        const newLocations=state.audience_demographics.locations.filter(location=>location!==action.payload);
        state.audience_demographics.locations=[...newLocations];
    },
    addNiche:(state,action:PayloadAction<niche>)=>{
        state.niches=[...state.niches,action.payload];
    },
    removeNiche:(state,action:PayloadAction<niche>)=>{
        const newNiches=state.niches.filter(niche=>niche!==action.payload);
        state.niches=[...newNiches];
    },
    setGender:(state,action:PayloadAction<gender>)=>{
        state.audience_demographics.gender=action.payload;
    },
    setAgeRange:(state,action:PayloadAction<age_range>)=>{
        state.audience_demographics.age_range=action.payload
    },
    addInfluencer:(state,action:PayloadAction<influencer>)=>{
        state.influencers=[...state.influencers,action.payload];
    },
    removeInfluencer:(state,action:PayloadAction<influencer>)=>{
        const newInfluencers=state.influencers.filter(influencer=>influencer!==action.payload)
        state.influencers=[...newInfluencers];
    },
    addMedia:(state,action:PayloadAction<[File]>)=>{
        const format_to_update_index=state.formats.findIndex(format=>format.value==action.payload.format)
        state.formats[format_to_update_index].media=action.payload
    },
    
    


    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = createCampaign.actions

export default createCampaign.reducer