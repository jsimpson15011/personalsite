
<?php get_header(); ?>
<div class="margin"></div>
<div class="margin"></div>
<section class="main-posts">
<?php
$all_subs= Ninja_Forms()->form( 1 )->get_subs();//get form id 1
$all_subs= array_values($all_subs);//turn array into indexable
$id_array_subs=array();
foreach ($all_subs as &$value){
    array_push($id_array_subs,$value->get_id());
}
$sub= Ninja_Forms()->form()->sub( 55 )->get();
$id_array_subs= array_values($id_array_subs);
$id= $sub->get_id();
$sub_array= array();
foreach ($id_array_subs as $value){
    array_push($sub_array,Ninja_Forms()->form()->sub( $value )->get());
}
$sub_array= array_values($sub_array);
foreach ($sub_array as $value){
    echo 'name:'.$value->get_field_value('name').'<br>';
    echo 'email:'.$value->get_field_value('email').'<br>';
    echo 'message:'. $value->get_field_value('message').'<br>';
    echo '<br>';
}
/*$field_value = $sub->get_field_value( 'name' );
$field_values = $sub->get_field_values();*/
/*$field_values = array_values($field_values);*/

$sub->update_field_value( 'name', 'randuly' )->save();

/*echo $field_value . '<br>';
echo json_encode($field_values);*/

?>
</section>
<a href="https://eteller.med5fcu.com/Centryx/servlet/com.sos.webteller.accountaccess.Login">TESST</a>
<?php get_footer(); ?>