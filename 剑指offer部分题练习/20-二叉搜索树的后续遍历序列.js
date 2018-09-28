/*
   题目描述：
   输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。
   思路：
   1、二叉搜索树，或为一棵空树，或其左子树上所有结点的值均小于根节点的值，其右子树上所有结点的值均大于根节点的值，其左右字数也分别为二叉排序树
   2、后续遍历，左右中，即最后一个元素是根节点，将该数组分为两部分，左子树部分都比根节点小，右子树部分都比根节点大
   3、递归
 * */
function VerifySquenceOfBST(sequence)
{
    if(!sequence.length){     // 若不是一个数组，直接返回false
        return false
    }
    return adj(sequence, 0, sequence.length -1)  // 递归
}
function adj(sequence, start, end){
    if(start >= end){
        return true
    }
    let i = end;
        // i表示左子树和右子树的边界点，i（包括i）以后均为右子树
    while(i > start && sequence[i - 1] > sequence[end] ){
        i--;
    }
    // 循环遍历左子树，若出现比根节点大的，则不是二叉搜索树
    for(var j=i-1; j>=start; j--){ 
        if(sequence[j] > sequence[end]){
            return false
        }
    }
    return adj(sequence, start, i-1) && adj(sequence, i, end-1)
}