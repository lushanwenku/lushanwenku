package com.lushanwenku;

import com.opencsv.CSVWriter;

import java.io.IOException;
import java.io.Writer;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * csv下载工具封装
 */
public class ExportCsvUtil {

    /**
     *
     * @param dataList
     * @param titleList
     * @param writer
     * @throws IOException
     */
    public static void writeToCsvExt(List<Map<String, Object>> dataList, List<String> titleList, Writer writer) throws IOException {
        List<String[]> data = new ArrayList<>();
        String[] header = titleList.toArray(new String[0]);
        data.add(header);
        for (Map<String, Object> o : dataList) {
            data.add(getRows(header, o));
        }
        CSVWriter csvWriter = new CSVWriter(
                writer,
                CSVWriter.DEFAULT_SEPARATOR,
                CSVWriter.NO_QUOTE_CHARACTER,
                CSVWriter.NO_ESCAPE_CHARACTER,
                CSVWriter.DEFAULT_LINE_END);
        csvWriter.writeAll(data);

        csvWriter.flush();
    }

    /**
     * 通过 key => value 获取 rows
     *
     * @param header
     * @param objectMap
     * @return
     */
    private static String[] getRows(String[] header, Map<String, Object> objectMap) {
        String[] rows = new String[header.length];
        for (int i = 0; i < rows.length; i++) {
            rows[i] = objectMap.get(header[i]).toString();
        }
        return rows;
    }
}