import Mock from 'mockjs'
import data from '@/data/data.json'

Mock.mock("/dataapi",()=>{
    return data
})