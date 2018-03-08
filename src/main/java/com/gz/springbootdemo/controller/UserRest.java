package com.gz.springbootdemo.controller;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSONObject;

/**
 * 
* <p>@Description</p> 用户登入登出
* <p>Company: SMARTLAB </p>
* @author gaozhen
* @date 2018年2月19日
* @Version 1.1
 */
@RestController
@RequestMapping("/web/rest/user")
public class UserRest {

	private static final Logger log = LoggerFactory.getLogger(UserRest.class);
	
	@RequestMapping("/hello")
	public String userLogin(@RequestBody String reqstr) {
		log.info(reqstr);
		JSONObject response=new JSONObject();
		try {
			JSONObject request = JSONObject.parseObject(reqstr);
			String name = request.getString("name");
			response.put("res", true);
			response.put("data","hello "+name+"！恭喜你，你学会了使用springboot");
		}catch(Exception e){
			response.put("res", false);
		}
		return response.toJSONString();
	}
	
	
}
