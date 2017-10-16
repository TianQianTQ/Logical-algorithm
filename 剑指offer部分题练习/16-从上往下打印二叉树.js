/*
   题目描述：
       从上往下打印出二叉树的每个节点，同层节点从左至右打印。
   思路：
   1、借助两个辅助队列，一个用来存放节点，一个存放节点值
   2、将根节点加入队列，然后遍历队列中的元素，便利过程中，访问该元素的左右节点，然后将左右子节点加入到队列
   3、如果需要换行打印操作，则定义两个指针，开始两个指针指向根节点，第二个指针根据遍历节点的子元素的最后一个值，然后对比判断是否需要换行
 * */
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function PrintFromTopToBottom(root)
{
    var queue = [];
    queue.push(root);
    var result = [];
    if(root == null){
        return result;
    }
    while(queue.length){
        var temp = queue.shift();
        result.push(temp.val);
        if(temp.left){
            queue.push(temp.left);
        }
        if(temp.right){
            queue.push(temp.right);
        }
    }
    return result;
}