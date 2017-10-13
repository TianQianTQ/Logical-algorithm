/*
在国际大型体育比赛中，参赛国家或地区一般总是以字典序出场。现在有若干支参赛国家队伍，请你安排他们出场顺序。
Input 若干行：每一行一个参赛国家英文名字，以end作为结束标志，国家名不超过300个。每个国家名都是有字母构成的，长度小于50。
 
Output 一行：排序后的国家英文名字，每个国家名之间有一个逗号，末尾无逗号。			
输入示例：
China
USA
Japan
Italy
France
Spain
Germany
Denmark
end
输出示例：
China,Denmark,France,Germany,Italy,Japan,Spain,USA
 * */
import java.util.Scanner;
import java.util.TreeSet;

public class Main_8 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in );
        TreeSet<String> tree = new TreeSet<String>();
        String str = sc.nextLine();
        while (!"end".equals(str)) {
            tree.add(str);
            str = sc.nextLine();
        }
        StringBuilder sb = new StringBuilder();
        for (String s : tree) {
            sb.append(s + ",");
        }
        String res = sb.toString();
        System.out.println(res.substring(0, res.length() - 1));
    }
}
