
<?php

    $sub= Ninja_Forms()->form()->sub( 1 )->get();

    $id= $sub->get_id();

    //$field_values = $sub->get_field_value( $field_key );

    echo $id;
    echo json_encode($sub);
wp_footer(); ?>
    </body>
</html>