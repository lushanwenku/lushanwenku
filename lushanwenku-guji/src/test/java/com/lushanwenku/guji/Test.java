

import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.DesiredCapabilities;

import java.util.HashMap;
import java.util.Map;

public class Test {

    @org.junit.Test
    public void testSelenium() {
        System.getProperties().setProperty("webdriver.chrome.driver", "D:\\lushanwenku\\lushanwenku\\lushanwenku-guji\\src\\main\\resources\\chromedriver_win32\\chromedriver.exe");
        WebDriver webDriver = new ChromeDriver();
        webDriver.get("http://huaban.com/");
        WebElement webElement = webDriver.findElement(By.xpath("/html"));
        System.out.println(webElement.getAttribute("outerHTML"));
        webDriver.close();
    }

    @org.junit.Test
    public void TestChrome()  {
        // System.getProperties().setProperty("webdriver.chrome.driver", "D:/IdeaYYW open/lushanwk/lushanwk-spiders/src/main/resources/selenium/chromedriver.exe");

        System.setProperty("webdriver.chrome.driver","D:/IdeaYYW open/lushanwk/lushanwk-spiders/src/main/resources/selenium/chromedriver.exe");

        ChromeOptions chromeOptions = new ChromeOptions();
        chromeOptions.addArguments("--no-sandbox");
        chromeOptions.addArguments("--disable-dev-shm-usage");

        // 如果只测试手机端浏览器 h5 页面需要加上下面三行
        Map<String, String> mobileEmulationMap = new HashMap<>();
        mobileEmulationMap.put("deviceName", "iPhone 6");
        chromeOptions.setExperimentalOption("mobileEmulation", mobileEmulationMap);

        //options.addExtensions(new File("X://extension_3_40_1_0.crx"));
/*        DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability(ChromeOptions.CAPABILITY, chromeOptions);
        chromeOptions.merge(capabilities);*/
        ChromeDriver driver = new ChromeDriver(chromeOptions);
        driver.get("https://h5.waimai.meituan.com/waimai/mindex/search?viewKeyword=&searchKeyword=&tgtStids=&sceneType=&mode=search");

        //driver.findElement(By.xpath("/html/body/mieta/div[1]/div/div/div/div/div/div/div[2]/div[2]")).click();

        // driver.findElement(By.cssSelector("._1XvjUOPMjzQ0GChHyalouv")).click();

        //driver.findElementById("kw").sendKeys("中国");        //文本框里输入
        // driver.findElementById("su").click();


        WebElement webElement = driver.findElement(By.xpath("/html"));
        System.out.println(webElement.getAttribute("outerHTML"));
        //driver.manage().window().maximize();
        driver.manage().window().setSize(new Dimension(414, 716));
        //driver.quit();
    }



    @org.junit.Test
    public void TestChromeMeituanF()  {
        // System.getProperties().setProperty("webdriver.chrome.driver", "D:/IdeaYYW open/lushanwk/lushanwk-spiders/src/main/resources/selenium/chromedriver.exe");

        System.setProperty("webdriver.chrome.driver","/lushanwenku/lushanwenku/lushanwenku-guji/src/main/resources/chromedriver_win32/chromedriver.exe");

        ChromeOptions chromeOptions = new ChromeOptions();
        chromeOptions.addArguments("--no-sandbox");
        chromeOptions.addArguments("--disable-dev-shm-usage");

        // 如果只测试手机端浏览器 h5 页面需要加上下面三行
        Map<String, String> mobileEmulationMap = new HashMap<>();
        mobileEmulationMap.put("deviceName", "iPhone 6");
        chromeOptions.setExperimentalOption("mobileEmulation", mobileEmulationMap);

        //options.addExtensions(new File("X://extension_3_40_1_0.crx"));
        DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability(ChromeOptions.CAPABILITY, chromeOptions);
        chromeOptions.merge(capabilities);
        ChromeDriver driver = new ChromeDriver(chromeOptions);
        driver.get("https://h5.waimai.meituan.com/waimai/mindex/searchresults?queryType=12002&keyword=%E6%AF%93%E5%A9%B7&entranceId=0&qwTypeId=11002&mode=search");

        System.out.println(driver.getTitle());
        System.out.println(driver.getTitle());
        System.out.println(driver.getTitle());
        System.out.println(driver.getTitle());
        System.out.println(driver.getTitle());

        String title = driver.findElement(By.xpath("/html/head/title")).getText();
        System.out.println(title);
        System.out.println(title);
        System.out.println(title);
        System.out.println(title);
        System.out.println(title);


        System.out.println("=============================================================");
        System.out.println("=============================================================");
        System.out.println("=============================================================");
        System.out.println("=============================================================");

        WebElement webElement = driver.findElement(By.xpath("/html"));
        System.out.println(webElement.getAttribute("outerHTML"));

        System.out.println("=============================================================");
        System.out.println("=============================================================");
        System.out.println("=============================================================");
        System.out.println("=============================================================");
        System.out.println("=============================================================");

        String strName = driver.findElement(By.xpath("//*[@id=\"wm-container\"]/div/div/div/div/ul/li[1]/div/div[2]/div[1]")).getText();
        System.out.println(strName);



        //driver.manage().window().maximize();
        driver.manage().window().setSize(new Dimension(414, 716));
        //driver.quit();
    }



    // www.liepin.com
    @org.junit.Test
    public void TestChromeLiePin()  {

        System.setProperty("webdriver.chrome.driver","/lushanwenku/lushanwenku/lushanwenku-guji/src/main/resources/chromedriver_win32/chromedriver.exe");

        ChromeOptions chromeOptions = new ChromeOptions();
        chromeOptions.addArguments("--no-sandbox");
        chromeOptions.addArguments("--disable-dev-shm-usage");

        // 如果只测试手机端浏览器 h5 页面需要加上下面三行

/*
        Map<String, String> mobileEmulationMap = new HashMap<>();
        mobileEmulationMap.put("deviceName", "iPhone 6");
        chromeOptions.setExperimentalOption("mobileEmulation", mobileEmulationMap);
*/

        //options.addExtensions(new File("X://extension_3_40_1_0.crx"));
/*        DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability(ChromeOptions.CAPABILITY, chromeOptions);
        chromeOptions.merge(capabilities);*/
        ChromeDriver driver = new ChromeDriver(chromeOptions);
        driver.get("https://www.liepin.com/zhaopin/");

        String jobPosition = driver.findElement(By.xpath("//*[@id=\"sojob\"]/div[2]/div/div[1]/div[1]/ul/li[1]/div/div[1]/h3")).getText();
        String jobSalary = driver.findElement(By.xpath("//*[@id=\"sojob\"]/div[2]/div/div[1]/div[1]/ul/li[1]/div/div[1]/p[1]/span[1]")).getText();
        String jobRegion = driver.findElement(By.xpath("//*[@id=\"sojob\"]/div[2]/div/div[1]/div[1]/ul/li[1]/div/div[1]/p[1]/a")).getText();
        System.out.println(jobPosition);
        System.out.println(jobSalary);
        System.out.println(jobRegion);

        // driver.findElement(By.cssSelector("._1XvjUOPMjzQ0GChHyalouv")).click();
        // driver.findElementById("kw").sendKeys("中国");        //文本框里输入
        // driver.findElementById("su").click();


        WebElement webElement = driver.findElement(By.xpath("/html"));
        // System.out.println(webElement.getAttribute("outerHTML"));
        //driver.manage().window().maximize();
        driver.manage().window().setSize(new Dimension(414, 716));
        //driver.quit();
    }


    @org.junit.Test
    public void TestChromeELE()  {
        // System.getProperties().setProperty("webdriver.chrome.driver", "/lushanwenku/lushanwenku/lushanwenku-guji/src/main/resources/chromedriver_win32/chromedriver.exe");

        System.setProperty("webdriver.chrome.driver","/lushanwenku/lushanwenku/lushanwenku-guji/src/main/resources/chromedriver_win32/chromedriver.exe");

        ChromeOptions chromeOptions = new ChromeOptions();
        chromeOptions.addArguments("--no-sandbox");
        chromeOptions.addArguments("--disable-dev-shm-usage");

        // 如果只测试手机端浏览器 h5 页面需要加上下面三行
        Map<String, String> mobileEmulationMap = new HashMap<>();
        mobileEmulationMap.put("deviceName", "iPhone 6");
        chromeOptions.setExperimentalOption("mobileEmulation", mobileEmulationMap);

        //options.addExtensions(new File("X://extension_3_40_1_0.crx"));
/*        DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability(ChromeOptions.CAPABILITY, chromeOptions);
        chromeOptions.merge(capabilities);*/
        ChromeDriver driver = new ChromeDriver(chromeOptions);
        driver.get("https://h5.ele.me/search/#/?spm=a2ogi.13147251.search.1");

        //driver.findElement(By.xpath("/html/body/mieta/div[1]/div/div/div/div/div/div/div[2]/div[2]")).click();

        // driver.findElement(By.cssSelector("._1XvjUOPMjzQ0GChHyalouv")).click();

        //driver.findElementById("kw").sendKeys("中国");        //文本框里输入
        // driver.findElementById("su").click();


        WebElement webElement = driver.findElement(By.xpath("/html"));
        System.out.println(webElement.getAttribute("outerHTML"));
        //driver.manage().window().maximize();
        driver.manage().window().setSize(new Dimension(414, 716));
        //driver.quit();
    }


}



