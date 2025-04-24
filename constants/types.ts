import React from "react";

export interface campaign_format_tab{
    name:string,
    value:string,
    content:string,
    component:React.ReactNode
}
export interface campaign_format{
    label:string,
    value:string,
    hint:string,
    tailored:string,
    icon:string,
    tabs:campaign_format_tab[],
    budget:number,
    budget_component:React.ReactNode,
    media:File[],
    poster?:File,
    tags:niche[]
}
export interface niche{
    id:number,
    name:string
}
export interface keyword{
    id:number,
    name:string
}
export interface influencer_audience{
  countries:string[],
  follower_rate:number,
  cities:string[]
}
export interface influencer{
    id:number,
    name:string,
    picture:string,
    platform:string,
    audience:influencer_audience,
    quality_rate:number,
}
export interface metric{
    name:string,
    value:string,
    description:string
}
export interface campaign_goal{
id:number,
label:string,
value:string
}
export interface location{
    lattitude:number,
    longitude:number,
    address:string,
    city:string,
    region:string,
    country:string
}
export interface newCampaign{
    title:string,
    description:string,
    formats:campaign_format[],
    metric:metric,
    budget:number,
    niches:niche[],
    keywords:keyword[],
    influencers:influencer[],
    goal:campaign_goal,
    start_date:Date,
    end_date:Date,
    audience_demographics:{locations:location[],gender:gender,age_range:age_range}
}
export interface age_range{
    min_age:number,
    max_age:number
}
export interface gender{
    name:string,
    label:string
}
export interface change_budget{
    format:string,
    value:number,
    format_value:number
}
export interface change_duration{
    start_date:Date,
    end_date:Date
}
