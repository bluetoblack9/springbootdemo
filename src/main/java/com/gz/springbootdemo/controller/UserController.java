package com.gz.springbootdemo.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * @description 拦截GET请求
 * @author gaozhen
 *
 */
@Controller
public class UserController {

	protected HttpServletRequest req;

	protected HttpServletResponse res;

	@ModelAttribute
	public void setReqAndRes(HttpServletRequest request, HttpServletResponse response) {
		this.req = request;
		this.res = response;
	}

	@RequestMapping(value = "/admin", method = RequestMethod.GET)
	public String getLogin() {
		return "adminManage";
	}



}
