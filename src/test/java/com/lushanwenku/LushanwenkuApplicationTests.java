package com.lushanwenku;

import org.apache.commons.collections.map.HashedMap;
import org.assertj.core.util.Lists;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@SpringBootTest
class LushanwenkuApplicationTests {

	@Test
	void contextLoads() {
		System.out.println("Hello");
	}

	@Test
	public void downloadTestExt() throws IOException {

		// 表头
		List<String> titleList = Lists.newArrayList("域名","时间");

		// 行数据
		Map<String,Object> dateMap1 = new HashedMap();
		dateMap1.put("域名","lushanwenku");
		dateMap1.put("时间","202301");

		// 行数据
		Map<String,Object> dateMap2 = new HashedMap();
		dateMap2.put("域名","lushanwenku.com");
		dateMap2.put("时间","202302");

		List<Map<String, Object>> downloadList = new ArrayList<>();
		downloadList.add(dateMap1);
		downloadList.add(dateMap2);

		// 桌面生成csv文件
		OutputStream os = new FileOutputStream(System.getProperty("user.home") +"/Desktop/lushanwenku"+ LocalDateTime.now()+".csv");
		OutputStreamWriter osw = new OutputStreamWriter(os); // 这一步将字节流转换为字符流

		ExportCsvUtil.writeToCsvExt(downloadList,titleList,osw);
	}

}
