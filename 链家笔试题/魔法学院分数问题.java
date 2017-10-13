/*魔法学院
 * 在魔法学院，小明为了拿奖学金，需要考试取得一定的成绩。对于即将面临的n门考试平均分至少要达到avg分，
 * 每门课的满分为r。小明凭自己的实力考试，第i门科目只能考ai分，但小明得到了精灵法师的魔法祝福加成，
 * 可以花费一些祝福值提高某科目的成绩，但最高不能超过满分。
 * 对于第i门科目，小明可以花费bi祝福值提高成绩1分。为了使得平均分达到avg分，
 * 问小明最少需要花费多少祝福值？
 * 
     输入
      第一行输入n,r,avg,接下来n行每行输入ai,bi (输入都为整数)
  输出
  输出最少话费的祝福值
  提示
  增加第三门成绩2分，第四门成绩1分，需要花费4祝福值
  输入示例：
	5 5 4
	5 2
	4 7
	3 1
	3 2
	2 5
输出示例：
	4
 * */
import java.util.*;  
public class Main_9{  
    static class test{  
        int score;  
        int work;  
    }  
    public static void main(String[] args) {  
        // TODO Auto-generated method stub  
       Scanner in=new Scanner(System.in );  
          
       while(in.hasNext()){  
           List<test> list=new ArrayList<test>();  
           int n=in.nextInt();  
           int r=in.nextInt();  
           int avg=in.nextInt();  
           for(int i=0;i<n;i++){    
               test a=new test();  
               a.score=in.nextInt();  
               a.work=in.nextInt();  
               list.add(a);  
           }  
           Collections.sort(list, new Comparator<test>(){  
           // @Override  
            public int compare(test o1, test o2) {  
                // TODO Auto-generated method stub  
                return o1.work-o2.work;  
            }            
           });  
           long effort=0;  
           int totalScore=0;  
           for(int j=0;j<list.size();j++){  
               totalScore+=list.get(j).score;  
           }  
           for(int j=0;j<list.size();j++){  
           
               while(list.get(j).score<r){  
                     
                   if(totalScore<avg*n){  
                   list.get(j).score++;  
                   totalScore++;  
                   effort+=list.get(j).work;  
                   }else{  
                       break;  
                   }  
               }                       
           }  
           System.out.println(effort);  
       }        
    }  
}  

