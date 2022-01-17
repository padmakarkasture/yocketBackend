import { ConsoleLogger, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PostInterface } from 'src/models/posts.interface';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {

   constructor(@InjectModel('Post') readonly postModel:Model<PostInterface>){}

  async create(createPostDto: CreatePostDto) {
    try {
     const isPresent = await this.postModel.find({
         title:createPostDto.title
     })
     if(isPresent.length>0){
       const present ={
          message:"already present in db",
          result:{
            isAlreadyPresent :true
          }
       }
       return present
     }


      const isAdded = await this.postModel.create(createPostDto)
      const response={
        statusCode:201,
        message:"Posted",
        result:isAdded
      }
      return response
    } catch (error) {
      console.log(error)
      return error

    }

  }

  async findAll(page,size) {
  try {
    let data=[];
    const result = await this.postModel.find()
    const dataList = result.reverse();
    console.log(dataList)
    const start=size*(page-1);
    const end = start+size;
    if(start>dataList.length){
      return 0
    }

   await dataList.map((ele, idx)=>{
        if(idx>=start && idx<end && ele){
          data.push(ele)
        }
    })
    const response = {
      statusCode:200,
      message:'success',
      totalCount:dataList.length,
      result:data
    }
    return response

  } catch (error) {
    console.log(error)

  }

  }



}
