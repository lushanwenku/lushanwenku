package com.lushanwenku;
import jakarta.servlet.http.HttpServletResponse;
import org.apache.commons.collections.map.HashedMap;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.net.URLEncoder;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

@RestController
public class DemoApplication {
    @GetMapping("/hello")
    public String hello(@RequestParam(value = "name", defaultValue = "World") String name) {
      return String.format("Hello %s!", name);
    }

    /**
     * 模拟下载数据
     * @param response
     * @throws IOException
     */
    @GetMapping("/download")
    public void download(HttpServletResponse response) throws IOException {
        // 表头
        List<String> titleList = Arrays.asList("域名", "时间");

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

        // 响应正文
        response.reset();
        response.setContentType("application/octet-stream");
        response.setCharacterEncoding("utf-8");
        // 这里URLEncoder.encode可以防止中文乱码
        String fileName = URLEncoder.encode("测试文件", "UTF-8").replaceAll("\\+", "%20");
        response.setHeader("Content-disposition", "attachment;filename=" + fileName + ".csv");
        ExportCsvUtil.writeToCsvExt(downloadList,titleList,new OutputStreamWriter(response.getOutputStream()));
    }
}