<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>株式会社Airz</title>
    <meta name="description" content="Airzは、”顧客に選ばれ続けるサービス創り”を通し、人々にとっての “あるべき未来” をつくります。顧客ニーズを捉え続ける、それがAirzのこだわり。どんなに優れたサービスやプロダクトも、ニーズがなければビジネスとして成立しません。ミッション内の「あるべき未来」は、現在の課題を解決した先にあると考えています。その為に、99%のニーズを捉え続ける努力を惜しまず、1%のユニークでオリジナリティ溢れる未来をつくっていく、Airzはこの考えを大切にしているプロフェッショナル集団です。">
    <link rel="shortcut icon" href="<?php echo get_template_directory_uri()?>/assets/img/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri()?>/style.css">
</head>

<body>
    <header>
        <div class="container">
            <a href="<?php echo site_url()?>/"><img src="<?php echo get_template_directory_uri()?>/assets/img/logo.png" alt="会社ロゴ"></a>
            <div class="header_link">
                <nav>
                    <ul>
                        <li><a href="<?php echo site_url()?>/#top_service" onmouseover="menuMouseOver(this)" onmouseleave="menuMouseLeave(this);">Services</a></li>
                        <li><a href="<?php echo site_url()?>/company" onmouseover="menuMouseOver(this)" onmouseleave="menuMouseLeave(this);">Company</a></li>
                        <li><a href="<?php echo site_url()?>/company#company_member" onmouseover="menuMouseOver(this)" onmouseleave="menuMouseLeave(this);">Member</a></li>
                        <li><a href="<?php echo site_url()?>/mission" onmouseover="menuMouseOver(this)" onmouseleave="menuMouseLeave(this);">Mission</a></li>
                        <li><a href="<?php echo site_url()?>/news" onmouseover="menuMouseOver(this)" onmouseleave="menuMouseLeave(this);">News</a></li>
                        <li><a target="_blank" href="https://recruit.jobcan.jp/airz" onmouseover="menuMouseOver(this)" onmouseleave="menuMouseLeave(this);">Recruit</a></li>
                        <li><a class="current" href="<?php echo site_url()?>/contact" onmouseover="menuMouseOver(this)" onmouseleave="menuMouseLeave(this);">Contact</a></li>
                    </ul>
                    <div class="menu_btn" onclick="menuClick(this);" onmouseover="btnMouseOver(this)" onmouseleave="btnMouseLeave(this)">
                        <div class="bar1">
                            <div></div>
                        </div>
                        <div class="bar2">
                            <div></div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>
    <menu>
        <div>
            <ul>
                <li><a href="<?php echo site_url()?>/#top_service" onclick="menuClose()" onmouseover="menuMouseOver(this)" onmouseleave="menuMouseLeave(this);"><span>Services</span><span>サービス</span></a></li>
                <li><a href="<?php echo site_url()?>/company" onclick="menuClose()" onmouseover="menuMouseOver(this)" onmouseleave="menuMouseLeave(this);"><span>Company</span><span>会社概要</span></a></li>
                <li><a href="<?php echo site_url()?>/company#company_member" onclick="menuClose()" onmouseover="menuMouseOver(this)" onmouseleave="menuMouseLeave(this);"><span>Member</span><span>​メンバー</span></a></li>
                <li><a href="<?php echo site_url()?>/mission" onclick="menuClose()" onmouseover="menuMouseOver(this)" onmouseleave="menuMouseLeave(this);"><span>Mission</span><span>ミッション</span></a></li>
                <li><a href="<?php echo site_url()?>/news" onclick="menuClose()" onmouseover="menuMouseOver(this)" onmouseleave="menuMouseLeave(this);"><span>News</span><span>お知らせ</span></a></li>
                <li><a target="_blank" href="https://recruit.jobcan.jp/airz" onclick="menuClose()" onmouseover="menuMouseOver(this)" onmouseleave="menuMouseLeave(this);"><span>Recruit</span><span>採用情報</span></a></li>
                <li><a href="<?php echo site_url()?>/contact" onclick="menuClose()" onmouseover="menuMouseOver(this)" onmouseleave="menuMouseLeave(this);"><span>Contact</span><span>お問い合わせ</span></a></li>
            </ul>
        </div>
    </menu>