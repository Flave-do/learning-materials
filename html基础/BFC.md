如果满足下面任意条件,就会自动创建一个新的BFC:

※ float属性的值不为none

※ position属性的值不为static或relative

※ overflow属性的值不为visible

※ display属性的值为flex, inline-flex, inlineblock, table-cell或table-caption



margin塌陷

overflow：hidden；				创建一个新的BFC



column-fill: balancet；			均匀分布

column-fill:auto；					顺序填充



column-count: 2;

column-gap: 20px;

column-rule-color: black;

column-rule-style:solid；						实线

column-rule-width: 5px;



column-count: 5;

columm-width: 200px;		====columns：5 200px



分行显示设置其属性columl-span:

columl-span: all;								可以横跨多列

