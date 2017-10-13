/*
   题目描述：
   输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）
   注意点：
  判断子树与父树的先后顺序问题
 * */
function isSubtree(root1, root2)
{
    if(root1 == null)  return false;
    if(root2 == null)  return true;
    if(root1.val == root2.val){
        return isSubtree(root1.left,root2.left) && isSubtree(root1.right,root2.right);
    }else{
        return false;
    }
}
function HasSubtree(pRoot1,pRoot2){
    if(pRoot1 == null || pRoot2 == null){
        return false;
    }
    return isSubtree(pRoot1,pRoot2) || HasSubtree(pRoot1.left,pRoot2) || HasSubtree(pRoot1.right,pRoot2)
}


function isSubtree(root1, root2) {
    if (root2 == null) return true;
    if (root1 == null) return false;
    if (root1.val == root2.val) {
        return isSubtree(root1.left, root2.left) &&
            isSubtree(root1.right, root2.right);
    } else {
        return false;   
    }
}
