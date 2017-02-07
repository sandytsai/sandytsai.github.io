<?php
if(empty($videos)) return;
if(!isset($height))   $height   = 500;
if(!isset($preload))  $preload  = true;
if(!isset($controls)) $controls = false;

$preload  = ($preload)  ? ' preload="preload"'   : '';
$controls = ($controls) ? ' controls="controls"' : '';
?>

    <?php foreach($videos as $video): ?>

  <video autoplay loop width="<?php echo $width ?>" height="<?php echo $height ?>"<?php echo $preload . $controls . $loop . $autoplay?>>
    <source src="<?php echo $video->url() ?>" type="<?php echo $video->mime() ?>" />
    <?php endforeach ?>

  </video>
