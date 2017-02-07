<!doctype html>
<html lang="<?= site()->language() ? site()->language()->code() : 'en' ?>">
<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">

  <title><?= $site->title()->html() ?> | <?= $page->title()->html() ?></title>
  <meta name="description" content="<?= $site->description()->html() ?>">

  <?= css('assets/css/index.css') ?>

  <?php $favicon = new Asset('assets/images/favicon.png');?>
  <link rel="icon" type="image/ico" href="<?php echo $favicon->url() ?>"/>
  <link href="https://fonts.googleapis.com/css?family=Alike|Arbutus+Slab|Domine|Eczar|Fauna+One|Lato|Merriweather|Petrona|Prata|Scope+One|Vesper+Libre" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Assistant:300,400,600,700|Rubik:300,400,500" rel="stylesheet">
</head>
<body>
  <header class="header wrap wide" role="banner">
    <div class="grid">

      <div class="branding column">
        <?php $mylogo = new Asset('assets/images/logo.png');?>
        <a href="<?= url() ?>" rel="home"><img src="<?php echo $mylogo->url() ?>" /></a>
      </div>

      <?php snippet('menu') ?>

    </div>
  </header>
