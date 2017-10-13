/*小明有n个玩具和m条绳子，每条绳子连着两个玩具，每两个玩具之间最多连一条绳子。
 * 小明要取某个玩具，就要消耗能量，这个能量就是跟这个玩具直接相连的其他玩具的能量值（已经被取走的玩具就不算相连了）。
 *  比如，4个玩具和3条绳子，每个玩具的能量值分别为10,20,30,40，其中1和4相连，1和2相连，2和3相连。
 *  小明如果要取光所有玩具，可以先取玩具3，这样就要消耗跟3直接相连的2的能量，花费20能量；
 *  然后取玩具2，这样就要消耗玩具1的能量值，花费10能量；
 *  然后取玩具4，也花费10；最后取玩具1，因为没有玩具与之相连了，不用花费能量。
 *  所以总共需要花费20+10+10+0能量，这也是取走所有玩具花费的最少能量。
 * 
   Input:给你n个玩具和m条绳子，每个玩具的能量值（n个数字）以及玩具间相连的情况（m行，每行两个数字a,b，表示玩具a与玩具b相连）
   ，问花费最少能量是多少？玩具编号为1到n，1<=n<=1000,0<=m<=2000,能量值为[0,100000]之间的整数。
   
   Output:输出最少花费。	
   输入示例：
    4 3
	10 20 30 40
	1 4
	1 2
	2 3	
   输出示例：
	40
 * */
import java.util.*;
public class Main_7 {
	public static void main(String[] args) {
		Scanner input = new Scanner(System.in );
		int n = input.nextInt();
		int m = input.nextInt();
		int[] arr = new int[n];
		for(int i = 0; i < n; i++){
			arr[i] = input.nextInt();
		}
		int a = 0;
		int b = 0;
		int result = 0;
		for(int i = 0; i < m; i++){
			a = input.nextInt();
			b = input.nextInt();
			if(arr[a-1] < arr[b-1]){
				result += arr[a-1];
			}else{
				result += arr[b-1];
			}
		}
		System.out.println(result);
	}
}
