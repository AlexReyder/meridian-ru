import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."_locales" AS ENUM('ru', 'en', 'ar');
  CREATE TYPE "public"."enum_pages_blocks_hero_title_rows_segments_tone" AS ENUM('default', 'emphasis', 'muted');
  CREATE TYPE "public"."enum_pages_blocks_hero_primary_page_key" AS ENUM('home', 'solutions', 'pricing', 'get-proposal', 'concepts', 'for-startups', 'for-partners', 'method');
  CREATE TYPE "public"."enum_pages_blocks_hero_secondary_page_key" AS ENUM('home', 'solutions', 'pricing', 'get-proposal', 'concepts', 'for-startups', 'for-partners', 'method');
  CREATE TYPE "public"."enum_pages_blocks_value_home_items_variant" AS ENUM('icon', 'step');
  CREATE TYPE "public"."enum_pages_blocks_value_home_items_icon" AS ENUM('trendingUp', 'trophy', 'code');
  CREATE TYPE "public"."enum_pages_blocks_video_walkthrough_home_primary_page_key" AS ENUM('home', 'solutions', 'pricing', 'get-proposal', 'concepts', 'for-startups', 'for-partners', 'method');
  CREATE TYPE "public"."enum_pages_blocks_video_walkthrough_home_secondary_page_key" AS ENUM('home', 'solutions', 'pricing', 'get-proposal', 'concepts', 'for-startups', 'for-partners', 'method');
  CREATE TYPE "public"."enum_pages_blocks_deliverables_home_items_icon" AS ENUM('fileText', 'users', 'gitBranch', 'layoutGrid', 'palette', 'mousePointer', 'layers', 'fileCheck');
  CREATE TYPE "public"."enum_pages_blocks_audience_home_cta_page_key" AS ENUM('home', 'solutions', 'pricing', 'get-proposal', 'concepts', 'for-startups', 'for-partners', 'method');
  CREATE TYPE "public"."enum_pages_blocks_concepts_home_concepts_page_key" AS ENUM('home', 'solutions', 'pricing', 'get-proposal', 'concepts', 'for-startups', 'for-partners', 'method');
  CREATE TYPE "public"."enum_pages_blocks_pricing_home_cta_page_key" AS ENUM('home', 'solutions', 'pricing', 'get-proposal', 'concepts', 'for-startups', 'for-partners', 'method');
  CREATE TYPE "public"."enum_pages_blocks_proposal_home_steps_icon" AS ENUM('fileText', 'mail', 'checkCircle');
  CREATE TYPE "public"."enum_pages_blocks_proposal_home_cta_page_key" AS ENUM('home', 'solutions', 'pricing', 'get-proposal', 'concepts', 'for-startups', 'for-partners', 'method');
  CREATE TYPE "public"."enum_pages_blocks_final_cta_home_primary_page_key" AS ENUM('home', 'solutions', 'pricing', 'get-proposal', 'concepts', 'for-startups', 'for-partners', 'method');
  CREATE TYPE "public"."enum_pages_blocks_final_cta_home_secondary_page_key" AS ENUM('home', 'solutions', 'pricing', 'get-proposal', 'concepts', 'for-startups', 'for-partners', 'method');
  CREATE TYPE "public"."enum_pages_blocks_hero_solutions_primary_page_key" AS ENUM('home', 'solutions', 'pricing', 'get-proposal', 'concepts', 'for-startups', 'for-partners', 'method');
  CREATE TYPE "public"."enum_pages_blocks_hero_solutions_secondary_page_key" AS ENUM('home', 'solutions', 'pricing', 'get-proposal', 'concepts', 'for-startups', 'for-partners', 'method');
  CREATE TYPE "public"."enum_pages_blocks_hero_solutions_image_source" AS ENUM('url', 'upload');
  CREATE TYPE "public"."enum_pages_blocks_details_solution_items_primary_page_key" AS ENUM('home', 'solutions', 'pricing', 'get-proposal', 'concepts', 'for-startups', 'for-partners', 'method');
  CREATE TYPE "public"."enum_pages_blocks_details_solution_items_secondary_page_key" AS ENUM('home', 'solutions', 'pricing', 'get-proposal', 'concepts', 'for-startups', 'for-partners', 'method');
  CREATE TYPE "public"."enum_pages_blocks_audience_solutions_items_cta_page_key" AS ENUM('home', 'solutions', 'pricing', 'get-proposal', 'concepts', 'for-startups', 'for-partners', 'method');
  CREATE TYPE "public"."enum_pages_blocks_connected_cta_solutions_primary_page_key" AS ENUM('home', 'solutions', 'pricing', 'get-proposal', 'concepts', 'for-startups', 'for-partners', 'method');
  CREATE TYPE "public"."enum_pages_blocks_connected_cta_solutions_secondary_page_key" AS ENUM('home', 'solutions', 'pricing', 'get-proposal', 'concepts', 'for-startups', 'for-partners', 'method');
  CREATE TYPE "public"."enum_pages_blocks_hero_startups_primary_page_key" AS ENUM('home', 'solutions', 'pricing', 'get-proposal', 'concepts', 'for-startups', 'for-partners', 'method');
  CREATE TYPE "public"."enum_pages_blocks_hero_startups_secondary_page_key" AS ENUM('home', 'solutions', 'pricing', 'get-proposal', 'concepts', 'for-startups', 'for-partners', 'method');
  CREATE TYPE "public"."enum_pages_blocks_value_startups_items_icon" AS ENUM('lightbulb', 'presentation', 'rocket', 'arrowRight');
  CREATE TYPE "public"."enum_pages_blocks_value_startups_layout_variant" AS ENUM('iconCards', 'numberedCards');
  CREATE TYPE "public"."enum_pages_blocks_deliverables_startups_layout_variant" AS ENUM('detailedCards', 'simpleCards');
  CREATE TYPE "public"."enum_pages_blocks_situations_startups_layout_variant" AS ENUM('detailedCards', 'simpleCards');
  CREATE TYPE "public"."enum_pages_blocks_situations_startups_cta_page_key" AS ENUM('home', 'solutions', 'pricing', 'get-proposal', 'concepts', 'for-startups', 'for-partners', 'method');
  CREATE TYPE "public"."enum_pages_blocks_artifacts_startups_items_icon" AS ENUM('fileText', 'gitBranch', 'layout', 'play', 'palette', 'package');
  CREATE TYPE "public"."enum_pages_blocks_efficiency_startups_items_icon" AS ENUM('zap', 'refreshCw', 'users', 'target');
  CREATE TYPE "public"."enum_pages_blocks_concepts_startups_cta_page_key" AS ENUM('home', 'solutions', 'pricing', 'get-proposal', 'concepts', 'for-startups', 'for-partners', 'method');
  CREATE TYPE "public"."enum_pages_blocks_cta_startups_primary_page_key" AS ENUM('home', 'solutions', 'pricing', 'get-proposal', 'concepts', 'for-startups', 'for-partners', 'method');
  CREATE TYPE "public"."enum_pages_blocks_cta_startups_secondary_page_key" AS ENUM('home', 'solutions', 'pricing', 'get-proposal', 'concepts', 'for-startups', 'for-partners', 'method');
  CREATE TYPE "public"."enum_pages_blocks_hero_agencies_primary_page_key" AS ENUM('home', 'solutions', 'pricing', 'get-proposal', 'concepts', 'for-startups', 'for-partners', 'method');
  CREATE TYPE "public"."enum_pages_blocks_hero_agencies_secondary_page_key" AS ENUM('home', 'solutions', 'pricing', 'get-proposal', 'concepts', 'for-startups', 'for-partners', 'method');
  CREATE TYPE "public"."enum_pages_blocks_value_agencies_items_icon" AS ENUM('presentation', 'palette', 'layout', 'send');
  CREATE TYPE "public"."enum_pages_blocks_value_agencies_layout_variant" AS ENUM('detailed', 'compact');
  CREATE TYPE "public"."enum_pages_blocks_projects_agencies_layout_variant" AS ENUM('detailed', 'compact');
  CREATE TYPE "public"."enum_pages_blocks_process_agencies_layout_variant" AS ENUM('connected', 'compact');
  CREATE TYPE "public"."enum_pages_blocks_artifacts_agencies_items_icon" AS ENUM('fileText', 'gitBranch', 'map', 'layoutGrid', 'smartphone', 'mousePointer', 'palette', 'send', 'fileCheck');
  CREATE TYPE "public"."enum_pages_blocks_why_agencies_layout_variant" AS ENUM('detailed', 'compact');
  CREATE TYPE "public"."enum_pages_blocks_concepts_agencies_layout_variant" AS ENUM('grid', 'carousel');
  CREATE TYPE "public"."enum_pages_blocks_concepts_agencies_view_all_page_key" AS ENUM('home', 'solutions', 'pricing', 'get-proposal', 'concepts', 'for-startups', 'for-partners', 'method');
  CREATE TYPE "public"."enum_pages_blocks_cta_agencies_primary_page_key" AS ENUM('home', 'solutions', 'pricing', 'get-proposal', 'concepts', 'for-startups', 'for-partners', 'method');
  CREATE TYPE "public"."enum_pages_blocks_cta_agencies_secondary_page_key" AS ENUM('home', 'solutions', 'pricing', 'get-proposal', 'concepts', 'for-startups', 'for-partners', 'method');
  CREATE TYPE "public"."hp_pri_pk" AS ENUM('home', 'solutions', 'pricing', 'get-proposal', 'concepts', 'for-startups', 'for-partners', 'method');
  CREATE TYPE "public"."hp_sec_pk" AS ENUM('home', 'solutions', 'pricing', 'get-proposal', 'concepts', 'for-startups', 'for-partners', 'method');
  CREATE TYPE "public"."pcp_pri_pk" AS ENUM('home', 'solutions', 'pricing', 'get-proposal', 'concepts', 'for-startups', 'for-partners', 'method');
  CREATE TYPE "public"."pcp_sec_pk" AS ENUM('home', 'solutions', 'pricing', 'get-proposal', 'concepts', 'for-startups', 'for-partners', 'method');
  CREATE TYPE "public"."cgp_pkg_key" AS ENUM('framing', 'prototype', 'partner');
  CREATE TYPE "public"."cgp_page_key" AS ENUM('home', 'solutions', 'pricing', 'get-proposal', 'concepts', 'for-startups', 'for-partners', 'method');
  CREATE TYPE "public"."dpp_vis" AS ENUM('structure', 'scenarios', 'screen-map', 'prototype', 'design-system', 'dev-materials');
  CREATE TYPE "public"."dpp_layout_v" AS ENUM('visuals', 'simple');
  CREATE TYPE "public"."dpp_top_pk" AS ENUM('home', 'solutions', 'pricing', 'get-proposal', 'concepts', 'for-startups', 'for-partners', 'method');
  CREATE TYPE "public"."dpp_ftr_pk" AS ENUM('home', 'solutions', 'pricing', 'get-proposal', 'concepts', 'for-startups', 'for-partners', 'method');
  CREATE TYPE "public"."nccp_pri_pk" AS ENUM('home', 'solutions', 'pricing', 'get-proposal', 'concepts', 'for-startups', 'for-partners', 'method');
  CREATE TYPE "public"."nccp_sec_pk" AS ENUM('home', 'solutions', 'pricing', 'get-proposal', 'concepts', 'for-startups', 'for-partners', 'method');
  CREATE TYPE "public"."fctp_pri_pk" AS ENUM('home', 'solutions', 'pricing', 'get-proposal', 'concepts', 'for-startups', 'for-partners', 'method');
  CREATE TYPE "public"."fctp_sec_pk" AS ENUM('home', 'solutions', 'pricing', 'get-proposal', 'concepts', 'for-startups', 'for-partners', 'method');
  CREATE TYPE "public"."hm_pri_pk" AS ENUM('home', 'solutions', 'pricing', 'get-proposal', 'concepts', 'for-startups', 'for-partners', 'method');
  CREATE TYPE "public"."hm_sec_pk" AS ENUM('home', 'solutions', 'pricing', 'get-proposal', 'concepts', 'for-startups', 'for-partners', 'method');
  CREATE TYPE "public"."sm_layout_v" AS ENUM('detailed', 'grid');
  CREATE TYPE "public"."ctam_pri_pk" AS ENUM('home', 'solutions', 'pricing', 'get-proposal', 'concepts', 'for-startups', 'for-partners', 'method');
  CREATE TYPE "public"."ctam_sec_pk" AS ENUM('home', 'solutions', 'pricing', 'get-proposal', 'concepts', 'for-startups', 'for-partners', 'method');
  CREATE TYPE "public"."hppr_icon" AS ENUM('clock', 'fileText', 'shield', 'users');
  CREATE TYPE "public"."tp_icon" AS ENUM('layers', 'users', 'building2', 'arrowRightLeft');
  CREATE TYPE "public"."pfp_ip_icon" AS ENUM('target', 'users', 'layers', 'arrowUpRight', 'arrowUpLeft');
  CREATE TYPE "public"."pfp_home_pk" AS ENUM('home', 'solutions', 'pricing', 'get-proposal', 'concepts', 'for-startups', 'for-partners', 'method');
  CREATE TYPE "public"."pfp_price_pk" AS ENUM('home', 'solutions', 'pricing', 'get-proposal', 'concepts', 'for-startups', 'for-partners', 'method');
  CREATE TYPE "public"."enum_pages_blocks_final_support_proposal_pricing_page_key" AS ENUM('home', 'solutions', 'pricing', 'get-proposal', 'concepts', 'for-startups', 'for-partners', 'method');
  CREATE TYPE "public"."hc_pri_pk" AS ENUM('home', 'solutions', 'pricing', 'get-proposal', 'concepts', 'for-startups', 'for-partners', 'method');
  CREATE TYPE "public"."hc_sec_pk" AS ENUM('home', 'solutions', 'pricing', 'get-proposal', 'concepts', 'for-startups', 'for-partners', 'method');
  CREATE TYPE "public"."ic_pillar_icon" AS ENUM('layers', 'penTool', 'arrowRight', 'arrowLeft');
  CREATE TYPE "public"."enum_pages_blocks_concept_section_concept_layout" AS ENUM('imageLeft', 'imageRight');
  CREATE TYPE "public"."enum_pages_blocks_concept_section_concept_cta_page_key" AS ENUM('home', 'solutions', 'pricing', 'get-proposal', 'concepts', 'for-startups', 'for-partners', 'method');
  CREATE TYPE "public"."enum_pages_blocks_why_concepts_items_icon" AS ENUM('search', 'layers', 'monitor', 'fileText');
  CREATE TYPE "public"."enum_pages_blocks_cta_concepts_primary_page_key" AS ENUM('home', 'solutions', 'pricing', 'get-proposal', 'concepts', 'for-startups', 'for-partners', 'method');
  CREATE TYPE "public"."enum_pages_blocks_cta_concepts_secondary_page_key" AS ENUM('home', 'solutions', 'pricing', 'get-proposal', 'concepts', 'for-startups', 'for-partners', 'method');
  CREATE TYPE "public"."enum_pages_route_type" AS ENUM('custom', 'system');
  CREATE TYPE "public"."enum_pages_page_key" AS ENUM('home', 'solutions', 'pricing', 'get-proposal', 'concepts', 'for-startups', 'for-partners', 'method');
  CREATE TYPE "public"."enum_proposal_files_source_type" AS ENUM('proposal-upload');
  CREATE TYPE "public"."enum_proposal_requests_mode" AS ENUM('wizard', 'upload');
  CREATE TYPE "public"."enum_proposal_requests_locale" AS ENUM('ru', 'en', 'ar');
  CREATE TYPE "public"."enum_header_navigation_page_key" AS ENUM('home', 'solutions', 'pricing', 'get-proposal', 'concepts', 'for-startups', 'for-partners', 'method');
  CREATE TYPE "public"."enum_footer_columns_links_page_key" AS ENUM('home', 'solutions', 'pricing', 'get-proposal', 'concepts', 'for-startups', 'for-partners', 'method');
  CREATE TYPE "public"."enum_footer_columns_type" AS ENUM('links', 'cta');
  CREATE TYPE "public"."enum_footer_columns_button_page_key" AS ENUM('home', 'solutions', 'pricing', 'get-proposal', 'concepts', 'for-startups', 'for-partners', 'method');
  CREATE TYPE "public"."enum_footer_bottom_links_page_key" AS ENUM('home', 'solutions', 'pricing', 'get-proposal', 'concepts', 'for-startups', 'for-partners', 'method');
  CREATE TYPE "public"."enum_footer_variant" AS ENUM('dark', 'light');
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_thumbnail_url" varchar,
  	"sizes_thumbnail_width" numeric,
  	"sizes_thumbnail_height" numeric,
  	"sizes_thumbnail_mime_type" varchar,
  	"sizes_thumbnail_filesize" numeric,
  	"sizes_thumbnail_filename" varchar,
  	"sizes_large_url" varchar,
  	"sizes_large_width" numeric,
  	"sizes_large_height" numeric,
  	"sizes_large_mime_type" varchar,
  	"sizes_large_filesize" numeric,
  	"sizes_large_filename" varchar
  );
  
  CREATE TABLE "pages_blocks_hero_title_rows_segments" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"tone" "enum_pages_blocks_hero_title_rows_segments_tone" DEFAULT 'default'
  );
  
  CREATE TABLE "pages_blocks_hero_title_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_hero_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'UX/UI Design Studio',
  	"title" varchar DEFAULT 'Проектируем сайты, digital-системы и mobile apps до начала разработки',
  	"description" varchar DEFAULT 'Делаем дизайн сайтов, интерфейсов B2B-платформ и мобильных приложений с продуктовой логикой и понятной структурой.',
  	"supporting_note" varchar,
  	"primary_button_label" varchar DEFAULT 'Получить предложение',
  	"primary_page_key" "enum_pages_blocks_hero_primary_page_key" DEFAULT 'get-proposal',
  	"secondary_button_label" varchar DEFAULT 'Посмотреть цены',
  	"secondary_page_key" "enum_pages_blocks_hero_secondary_page_key" DEFAULT 'pricing',
  	"desktop_badge_label" varchar DEFAULT 'Digital-система',
  	"mobile_badge_label" varchar DEFAULT 'Mobile app',
  	"desktop_image_id" integer,
  	"mobile_image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_value_home_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_pages_blocks_value_home_items_variant" DEFAULT 'icon' NOT NULL,
  	"icon" "enum_pages_blocks_value_home_items_icon" DEFAULT 'trendingUp',
  	"kicker" varchar,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_value_home" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Работаем с сайтами, digital-системами, порталами, dashboards и мобильными приложениями.' NOT NULL,
  	"title" varchar DEFAULT 'Для проектов, которые нужно не просто нарисовать, а объяснить, согласовать и запустить' NOT NULL,
  	"description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_video_walkthrough_home_meta_badges" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_video_walkthrough_home_timeline" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"number" varchar NOT NULL,
  	"label" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_video_walkthrough_home_highlights" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_video_walkthrough_home" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Walkthrough' NOT NULL,
  	"title" varchar DEFAULT 'От задачи до готового прототипа' NOT NULL,
  	"subheadline" varchar NOT NULL,
  	"video_label" varchar DEFAULT 'Видео',
  	"duration_label" varchar DEFAULT '4:32',
  	"highlights_title" varchar DEFAULT 'Что вы увидите в ролике' NOT NULL,
  	"cta_title" varchar NOT NULL,
  	"cta_subtext" varchar NOT NULL,
  	"primary_button_label" varchar DEFAULT 'Получить предложение' NOT NULL,
  	"primary_page_key" "enum_pages_blocks_video_walkthrough_home_primary_page_key" DEFAULT 'get-proposal' NOT NULL,
  	"secondary_button_label" varchar DEFAULT 'Посмотреть цены' NOT NULL,
  	"secondary_page_key" "enum_pages_blocks_video_walkthrough_home_secondary_page_key" DEFAULT 'pricing' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_deliverables_home_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_pages_blocks_deliverables_home_items_icon" DEFAULT 'fileText' NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_deliverables_home" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Что входит в работу' NOT NULL,
  	"title" varchar DEFAULT 'Что вы получаете на первом этапе' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_why_home_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_why_home" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Почему мы' NOT NULL,
  	"title" varchar DEFAULT 'Почему Atelier Meridian' NOT NULL,
  	"description" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_audience_home_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"problem" varchar NOT NULL,
  	"solution" varchar NOT NULL,
  	"result" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_audience_home" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"section_id" varchar DEFAULT 'startups',
  	"eyebrow" varchar DEFAULT 'Для кого' NOT NULL,
  	"title" varchar DEFAULT 'Кому мы помогаем' NOT NULL,
  	"problem_label" varchar DEFAULT 'Проблема' NOT NULL,
  	"solution_label" varchar DEFAULT 'Что упрощаем' NOT NULL,
  	"result_label" varchar DEFAULT 'Результат' NOT NULL,
  	"cta_label" varchar DEFAULT 'Получить предложение' NOT NULL,
  	"cta_page_key" "enum_pages_blocks_audience_home_cta_page_key" DEFAULT 'get-proposal' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_concepts_home_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"badge" varchar NOT NULL,
  	"challenge" varchar NOT NULL,
  	"structured" varchar NOT NULL,
  	"delivered" varchar NOT NULL,
  	"image_url" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_concepts_home" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Portfolio' NOT NULL,
  	"title" varchar DEFAULT 'Концепты студии' NOT NULL,
  	"description" varchar NOT NULL,
  	"challenge_label" varchar DEFAULT 'Задача' NOT NULL,
  	"structured_label" varchar DEFAULT 'Что структурировали' NOT NULL,
  	"delivered_label" varchar DEFAULT 'Что подготовили' NOT NULL,
  	"view_concepts_label" varchar DEFAULT 'Посмотреть концепты' NOT NULL,
  	"concepts_page_key" "enum_pages_blocks_concepts_home_concepts_page_key" DEFAULT 'concepts' NOT NULL,
  	"previous_aria_label" varchar DEFAULT 'Previous concept' NOT NULL,
  	"next_aria_label" varchar DEFAULT 'Next concept' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_method_home_items_details" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_method_home_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"number" varchar NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_method_home" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"section_id" varchar DEFAULT 'method',
  	"eyebrow" varchar DEFAULT 'Process' NOT NULL,
  	"title" varchar DEFAULT 'Метод работы' NOT NULL,
  	"description" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_pricing_home_items_includes" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_pricing_home_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"price" varchar NOT NULL,
  	"timeline" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"featured" boolean DEFAULT false
  );
  
  CREATE TABLE "pages_blocks_pricing_home" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"section_id" varchar DEFAULT 'formats',
  	"eyebrow" varchar DEFAULT 'Packages' NOT NULL,
  	"title" varchar DEFAULT 'Форматы работы' NOT NULL,
  	"cta_label" varchar DEFAULT 'Получить предложение' NOT NULL,
  	"cta_page_key" "enum_pages_blocks_pricing_home_cta_page_key" DEFAULT 'get-proposal' NOT NULL,
  	"featured_badge" varchar DEFAULT 'Популярный выбор' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_proposal_home_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_pages_blocks_proposal_home_steps_icon" DEFAULT 'fileText' NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_proposal_home" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"section_id" varchar DEFAULT 'proposal',
  	"title" varchar DEFAULT 'Закажите дизайн сайта, системы или приложения' NOT NULL,
  	"description" varchar NOT NULL,
  	"cta_label" varchar DEFAULT 'Получить предложение' NOT NULL,
  	"cta_page_key" "enum_pages_blocks_proposal_home_cta_page_key" DEFAULT 'get-proposal' NOT NULL,
  	"footer_note" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_sample_preview_home_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"subtitle" varchar NOT NULL,
  	"image_url" varchar NOT NULL,
  	"alt" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_sample_preview_home" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Материалы первого этапа' NOT NULL,
  	"title" varchar DEFAULT 'Что вы получаете на первом этапе' NOT NULL,
  	"description" varchar NOT NULL,
  	"bottom_note" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_trust_home_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_trust_home" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_faq_home_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar NOT NULL,
  	"answer" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_faq_home" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'FAQ' NOT NULL,
  	"title" varchar DEFAULT 'Частые вопросы' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_final_cta_home" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"primary_button_label" varchar DEFAULT 'Получить предложение' NOT NULL,
  	"primary_page_key" "enum_pages_blocks_final_cta_home_primary_page_key" DEFAULT 'get-proposal' NOT NULL,
  	"secondary_button_label" varchar DEFAULT 'Посмотреть цены' NOT NULL,
  	"secondary_page_key" "enum_pages_blocks_final_cta_home_secondary_page_key" DEFAULT 'pricing' NOT NULL,
  	"footer_note" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_hero_solutions_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_hero_solutions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'UX/UI Design Solutions' NOT NULL,
  	"title" varchar DEFAULT 'Решения для сайтов, digital-систем и мобильных приложений' NOT NULL,
  	"description" varchar NOT NULL,
  	"note" varchar NOT NULL,
  	"primary_button_label" varchar DEFAULT 'Получить предложение' NOT NULL,
  	"primary_page_key" "enum_pages_blocks_hero_solutions_primary_page_key" DEFAULT 'get-proposal' NOT NULL,
  	"secondary_button_label" varchar DEFAULT 'Посмотреть цены' NOT NULL,
  	"secondary_page_key" "enum_pages_blocks_hero_solutions_secondary_page_key" DEFAULT 'pricing' NOT NULL,
  	"image_source" "enum_pages_blocks_hero_solutions_image_source" DEFAULT 'url',
  	"image_alt" varchar NOT NULL,
  	"image_url" varchar,
  	"image_media_id" integer,
  	"image_file_id" integer,
  	"floating_label" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_positioning_intro_solutions_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"number" varchar NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_positioning_intro_solutions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Не просто дизайн, а решение под тип задачи' NOT NULL,
  	"description" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_grid_solutions_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar NOT NULL,
  	"title" varchar NOT NULL,
  	"subtitle" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_grid_solutions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Типы задач' NOT NULL,
  	"learn_more_label" varchar DEFAULT 'Подробнее' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_details_solution_items_when_relevant" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_details_solution_items_what_we_clarify" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_details_solution_items_what_client_receives" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_details_solution_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar NOT NULL,
  	"title" varchar NOT NULL,
  	"intro" varchar NOT NULL,
  	"primary_button_label" varchar DEFAULT 'Получить предложение' NOT NULL,
  	"primary_page_key" "enum_pages_blocks_details_solution_items_primary_page_key" DEFAULT 'get-proposal' NOT NULL,
  	"secondary_button_label" varchar,
  	"secondary_page_key" "enum_pages_blocks_details_solution_items_secondary_page_key"
  );
  
  CREATE TABLE "pages_blocks_details_solution" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"when_relevant_label" varchar DEFAULT 'Когда актуально' NOT NULL,
  	"what_we_clarify_label" varchar DEFAULT 'Что помогаем прояснить' NOT NULL,
  	"what_client_receives_label" varchar DEFAULT 'Что получает клиент' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_client_artifacts_solutions_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"subtitle" varchar NOT NULL,
  	"image_url" varchar NOT NULL,
  	"alt" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_client_artifacts_solutions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Что входит в работу' NOT NULL,
  	"title" varchar DEFAULT 'Что вы получаете на первом этапе' NOT NULL,
  	"description" varchar NOT NULL,
  	"bottom_note" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_audience_solutions_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"challenge" varchar NOT NULL,
  	"result" varchar NOT NULL,
  	"cta_label" varchar NOT NULL,
  	"cta_page_key" "enum_pages_blocks_audience_solutions_items_cta_page_key" NOT NULL
  );
  
  CREATE TABLE "pages_blocks_audience_solutions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Целевая аудитория' NOT NULL,
  	"title" varchar DEFAULT 'Кому подходит этот подход' NOT NULL,
  	"challenge_label" varchar DEFAULT 'Типичная задача' NOT NULL,
  	"result_label" varchar DEFAULT 'Что становится проще' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_why_solutions_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_why_solutions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Почему мы' NOT NULL,
  	"title" varchar DEFAULT 'Почему выбирают Atelier Meridian' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_connected_cta_solutions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Не уверены, какое решение подходит именно вам?' NOT NULL,
  	"description" varchar NOT NULL,
  	"primary_button_label" varchar DEFAULT 'Получить предложение' NOT NULL,
  	"primary_page_key" "enum_pages_blocks_connected_cta_solutions_primary_page_key" DEFAULT 'get-proposal' NOT NULL,
  	"secondary_button_label" varchar DEFAULT 'Посмотреть цены' NOT NULL,
  	"secondary_page_key" "enum_pages_blocks_connected_cta_solutions_secondary_page_key" DEFAULT 'pricing' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_faq_solutions_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar NOT NULL,
  	"answer" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_faq_solutions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'FAQ' NOT NULL,
  	"title" varchar DEFAULT 'Частые вопросы по решениям' NOT NULL,
  	"description" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_hero_startups_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_hero_startups" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Для стартапов' NOT NULL,
  	"title" varchar DEFAULT 'Для стартапов, которым нужен ясный продукт до начала разработки' NOT NULL,
  	"description" varchar NOT NULL,
  	"note" varchar NOT NULL,
  	"primary_button_label" varchar DEFAULT 'Получить предложение' NOT NULL,
  	"primary_page_key" "enum_pages_blocks_hero_startups_primary_page_key" DEFAULT 'get-proposal' NOT NULL,
  	"secondary_button_label" varchar DEFAULT 'Посмотреть цены' NOT NULL,
  	"secondary_page_key" "enum_pages_blocks_hero_startups_secondary_page_key" DEFAULT 'pricing' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_value_startups_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"number" varchar,
  	"icon" "enum_pages_blocks_value_startups_items_icon" DEFAULT 'lightbulb',
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_value_startups" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Зачем приходят' NOT NULL,
  	"title" varchar DEFAULT 'Зачем стартапы приходят в Atelier Meridian' NOT NULL,
  	"description" varchar NOT NULL,
  	"layout_variant" "enum_pages_blocks_value_startups_layout_variant" DEFAULT 'iconCards' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_deliverables_startups_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"when_relevant" varchar,
  	"result" varchar
  );
  
  CREATE TABLE "pages_blocks_deliverables_startups" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Решения' NOT NULL,
  	"title" varchar DEFAULT 'С чем мы помогаем startup-командам' NOT NULL,
  	"layout_variant" "enum_pages_blocks_deliverables_startups_layout_variant" DEFAULT 'detailedCards' NOT NULL,
  	"when_relevant_label" varchar DEFAULT 'Когда актуально',
  	"result_label" varchar DEFAULT 'Результат',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_situations_startups_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"situation" varchar NOT NULL,
  	"explanation" varchar
  );
  
  CREATE TABLE "pages_blocks_situations_startups" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Когда актуально' NOT NULL,
  	"title" varchar DEFAULT 'Когда эта страница особенно актуальна' NOT NULL,
  	"layout_variant" "enum_pages_blocks_situations_startups_layout_variant" DEFAULT 'detailedCards' NOT NULL,
  	"cta_label" varchar DEFAULT 'Получить предложение' NOT NULL,
  	"cta_page_key" "enum_pages_blocks_situations_startups_cta_page_key" DEFAULT 'get-proposal' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_artifacts_startups_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_pages_blocks_artifacts_startups_items_icon" NOT NULL,
  	"title" varchar NOT NULL,
  	"support" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_artifacts_startups" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Результат' NOT NULL,
  	"title" varchar DEFAULT 'Что получает founder в результате' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_process_startups_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"number" varchar NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_process_startups" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Процесс' NOT NULL,
  	"title" varchar DEFAULT 'Как это обычно происходит' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_efficiency_startups_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_pages_blocks_efficiency_startups_items_icon" DEFAULT 'zap' NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_efficiency_startups" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Подход' NOT NULL,
  	"title" varchar DEFAULT 'Почему это удобнее, чем длинный agency-процесс' NOT NULL,
  	"description" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_concepts_startups_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"challenge" varchar NOT NULL,
  	"clarified" varchar NOT NULL,
  	"prepared" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_concepts_startups" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Концепты' NOT NULL,
  	"title" varchar DEFAULT 'Как это может выглядеть' NOT NULL,
  	"concept_badge_label" varchar DEFAULT 'Концепт студии' NOT NULL,
  	"challenge_label" varchar DEFAULT 'Задача' NOT NULL,
  	"clarified_label" varchar DEFAULT 'Что прояснили' NOT NULL,
  	"prepared_label" varchar DEFAULT 'Что подготовили' NOT NULL,
  	"cta_label" varchar DEFAULT 'Посмотреть концепты' NOT NULL,
  	"cta_page_key" "enum_pages_blocks_concepts_startups_cta_page_key" DEFAULT 'concepts' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_cta_startups" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Не уверены, с чего начать: с сайта, MVP или prototype?' NOT NULL,
  	"description" varchar NOT NULL,
  	"primary_button_label" varchar DEFAULT 'Получить предложение' NOT NULL,
  	"primary_page_key" "enum_pages_blocks_cta_startups_primary_page_key" DEFAULT 'get-proposal' NOT NULL,
  	"secondary_button_label" varchar DEFAULT 'Посмотреть цены' NOT NULL,
  	"secondary_page_key" "enum_pages_blocks_cta_startups_secondary_page_key" DEFAULT 'pricing' NOT NULL,
  	"footer_note" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_faq_startups_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar NOT NULL,
  	"answer" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_faq_startups" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'FAQ' NOT NULL,
  	"title" varchar DEFAULT 'Частые вопросы' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_hero_agencies_partner_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_hero_agencies" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Для партнёров' NOT NULL,
  	"title_prefix" varchar DEFAULT 'Для партнёров, которым нужен внешний' NOT NULL,
  	"title_accent" varchar DEFAULT 'premium-партнёр' NOT NULL,
  	"title_suffix" varchar,
  	"description" varchar NOT NULL,
  	"description_secondary" varchar NOT NULL,
  	"primary_button_label" varchar DEFAULT 'Получить предложение' NOT NULL,
  	"primary_page_key" "enum_pages_blocks_hero_agencies_primary_page_key" DEFAULT 'get-proposal' NOT NULL,
  	"secondary_button_label" varchar DEFAULT 'Посмотреть цены' NOT NULL,
  	"secondary_page_key" "enum_pages_blocks_hero_agencies_secondary_page_key" DEFAULT 'pricing' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_partners_clarification_agencies_pillars" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_partners_clarification_agencies" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Не просто подрядчик по дизайну, а внешний product / interface partner' NOT NULL,
  	"description" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_audience_agencies_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_audience_agencies" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Целевая аудитория' NOT NULL,
  	"title" varchar DEFAULT 'Кому подходит этот формат' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_value_agencies_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_pages_blocks_value_agencies_items_icon" DEFAULT 'presentation',
  	"title" varchar NOT NULL,
  	"problem" varchar,
  	"when_relevant" varchar,
  	"why_helpful" varchar,
  	"text" varchar
  );
  
  CREATE TABLE "pages_blocks_value_agencies" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Value' NOT NULL,
  	"title" varchar DEFAULT 'Где мы усиливаем партнёрские проекты' NOT NULL,
  	"layout_variant" "enum_pages_blocks_value_agencies_layout_variant" DEFAULT 'detailed' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_projects_agencies_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"explanation" varchar NOT NULL,
  	"use_case" varchar NOT NULL,
  	"output" varchar
  );
  
  CREATE TABLE "pages_blocks_projects_agencies" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Типы проектов' NOT NULL,
  	"title" varchar DEFAULT 'С какими проектами подключаемся' NOT NULL,
  	"layout_variant" "enum_pages_blocks_projects_agencies_layout_variant" DEFAULT 'detailed' NOT NULL,
  	"use_case_label" varchar DEFAULT 'Типичный кейс',
  	"output_label" varchar DEFAULT 'Output',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_process_agencies_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"number" varchar NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_process_agencies_markers" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_process_agencies" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Process' NOT NULL,
  	"title" varchar DEFAULT 'Как обычно устроена работа с партнёрами' NOT NULL,
  	"layout_variant" "enum_pages_blocks_process_agencies_layout_variant" DEFAULT 'connected' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_artifacts_agencies_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_pages_blocks_artifacts_agencies_items_icon" DEFAULT 'fileText' NOT NULL,
  	"title" varchar NOT NULL,
  	"support" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_artifacts_agencies" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Deliverables' NOT NULL,
  	"title" varchar DEFAULT 'Что получает партнёрская команда' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_why_agencies_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar
  );
  
  CREATE TABLE "pages_blocks_why_agencies" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Why' NOT NULL,
  	"title" varchar DEFAULT 'Почему этот формат удобен партнёрам' NOT NULL,
  	"layout_variant" "enum_pages_blocks_why_agencies_layout_variant" DEFAULT 'detailed' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_concepts_agencies_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"badge" varchar NOT NULL,
  	"title" varchar NOT NULL,
  	"challenge" varchar NOT NULL,
  	"clarified" varchar NOT NULL,
  	"prepared" varchar NOT NULL,
  	"image_url" varchar,
  	"image_alt" varchar
  );
  
  CREATE TABLE "pages_blocks_concepts_agencies" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Cases' NOT NULL,
  	"title" varchar DEFAULT 'Как это выглядит в работе' NOT NULL,
  	"description" varchar,
  	"layout_variant" "enum_pages_blocks_concepts_agencies_layout_variant" DEFAULT 'grid' NOT NULL,
  	"challenge_label" varchar DEFAULT 'Challenge' NOT NULL,
  	"clarified_label" varchar DEFAULT 'Clarified' NOT NULL,
  	"prepared_label" varchar DEFAULT 'Prepared' NOT NULL,
  	"view_all_label" varchar DEFAULT 'Посмотреть концепты' NOT NULL,
  	"view_all_page_key" "enum_pages_blocks_concepts_agencies_view_all_page_key" DEFAULT 'concepts' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_cta_agencies" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Нужен внешний product / UX / interface layer под проект?' NOT NULL,
  	"description" varchar NOT NULL,
  	"primary_button_label" varchar DEFAULT 'Получить предложение' NOT NULL,
  	"primary_page_key" "enum_pages_blocks_cta_agencies_primary_page_key" DEFAULT 'get-proposal' NOT NULL,
  	"secondary_button_label" varchar DEFAULT 'Посмотреть цены' NOT NULL,
  	"secondary_page_key" "enum_pages_blocks_cta_agencies_secondary_page_key" DEFAULT 'pricing' NOT NULL,
  	"footer_note" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_faq_agencies_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar NOT NULL,
  	"answer" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_faq_agencies" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'FAQ' NOT NULL,
  	"title" varchar DEFAULT 'Частые вопросы' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_hero_pricing_trust_labels" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_hero_pricing" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Форматы и стоимость' NOT NULL,
  	"title" varchar DEFAULT 'Цены и форматы работы' NOT NULL,
  	"description" varchar NOT NULL,
  	"description_secondary" varchar NOT NULL,
  	"primary_button_label" varchar DEFAULT 'Получить предложение' NOT NULL,
  	"primary_page_key" "hp_pri_pk" DEFAULT 'get-proposal' NOT NULL,
  	"secondary_button_label" varchar DEFAULT 'Посмотреть метод' NOT NULL,
  	"secondary_page_key" "hp_sec_pk" DEFAULT 'method' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_positioning_block_pricing_pillars" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_positioning_block_pricing_delivery_elements" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_positioning_block_pricing" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Понятный процесс работы' NOT NULL,
  	"title" varchar DEFAULT 'Не прайс на дизайн, а понятные форматы продуктовой работы' NOT NULL,
  	"description" varchar NOT NULL,
  	"description_secondary" varchar,
  	"right_title" varchar DEFAULT 'Работа напрямую с командой' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_package_cards_pricing_packages_includes" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_package_cards_pricing_packages" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"package_key" varchar NOT NULL,
  	"title" varchar NOT NULL,
  	"subtitle" varchar NOT NULL,
  	"price" varchar NOT NULL,
  	"price_note" varchar NOT NULL,
  	"timeline" varchar NOT NULL,
  	"for_whom" varchar NOT NULL,
  	"primary_button_label" varchar DEFAULT 'Получить предложение' NOT NULL,
  	"primary_page_key" "pcp_pri_pk" DEFAULT 'get-proposal' NOT NULL,
  	"secondary_link_label" varchar NOT NULL,
  	"secondary_page_key" "pcp_sec_pk" DEFAULT 'for-startups' NOT NULL,
  	"featured" boolean DEFAULT false
  );
  
  CREATE TABLE "pages_blocks_package_cards_pricing" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Форматы работы' NOT NULL,
  	"title" varchar DEFAULT 'Три формата работы' NOT NULL,
  	"description" varchar NOT NULL,
  	"context_line" varchar,
  	"for_whom_label" varchar DEFAULT 'Для кого' NOT NULL,
  	"includes_label" varchar DEFAULT 'Что входит' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_choosing_guide_pricing_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"condition" varchar NOT NULL,
  	"problem" varchar NOT NULL,
  	"solution" varchar NOT NULL,
  	"package" varchar NOT NULL,
  	"package_key" "cgp_pkg_key" DEFAULT 'framing' NOT NULL,
  	"page_key" "cgp_page_key" DEFAULT 'get-proposal' NOT NULL
  );
  
  CREATE TABLE "pages_blocks_choosing_guide_pricing" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Рекомендации' NOT NULL,
  	"title" varchar DEFAULT 'Как понять, какой формат подходит вам' NOT NULL,
  	"situation_label" varchar DEFAULT 'Ситуация' NOT NULL,
  	"solution_label" varchar DEFAULT 'Решение' NOT NULL,
  	"recommended_label" varchar DEFAULT 'Рекомендуем' NOT NULL,
  	"button_label" varchar DEFAULT 'Выбрать' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_deliverables_preview_pricing_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"subtitle" varchar NOT NULL,
  	"visual" "dpp_vis"
  );
  
  CREATE TABLE "pages_blocks_deliverables_preview_pricing" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Состав работ' NOT NULL,
  	"title" varchar DEFAULT 'Что входит в каждый формат работы' NOT NULL,
  	"description" varchar NOT NULL,
  	"layout_variant" "dpp_layout_v" DEFAULT 'visuals' NOT NULL,
  	"top_link_label" varchar,
  	"top_link_page_key" "dpp_top_pk",
  	"footer_note" varchar,
  	"footer_link_label" varchar,
  	"footer_link_page_key" "dpp_ftr_pk",
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_price_explanation_pricing_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_price_explanation_pricing" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Почему так' NOT NULL,
  	"title" varchar DEFAULT 'Почему это стоит столько' NOT NULL,
  	"description" varchar NOT NULL,
  	"description_secondary" varchar NOT NULL,
  	"quote" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_no_call_cta_pricing_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" varchar DEFAULT 'fileText' NOT NULL,
  	"step" varchar NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_no_call_cta_pricing" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Старт без звонков' NOT NULL,
  	"title" varchar DEFAULT 'Получите рекомендацию по проекту без обязательного стартового звонка' NOT NULL,
  	"description" varchar NOT NULL,
  	"primary_button_label" varchar DEFAULT 'Получить предложение' NOT NULL,
  	"primary_page_key" "nccp_pri_pk" DEFAULT 'get-proposal' NOT NULL,
  	"secondary_button_label" varchar NOT NULL,
  	"secondary_page_key" "nccp_sec_pk" DEFAULT 'get-proposal' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_faq_pricing_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar NOT NULL,
  	"answer" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_faq_pricing" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Вопросы' NOT NULL,
  	"title" varchar DEFAULT 'Частые вопросы о форматах и стоимости' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_final_cta_pricing" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Следующий шаг' NOT NULL,
  	"title" varchar DEFAULT 'Закажите дизайн сайта, системы или приложения' NOT NULL,
  	"description" varchar NOT NULL,
  	"primary_button_label" varchar DEFAULT 'Получить предложение' NOT NULL,
  	"primary_page_key" "fctp_pri_pk" DEFAULT 'get-proposal' NOT NULL,
  	"secondary_button_label" varchar DEFAULT 'На главную' NOT NULL,
  	"secondary_page_key" "fctp_sec_pk" DEFAULT 'home' NOT NULL,
  	"footer_note" varchar DEFAULT 'Для сайтов · Digital-систем · Порталов · Mobile apps' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_hero_method" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Как мы работаем' NOT NULL,
  	"title" varchar DEFAULT 'Процесс работы над сайтом, системой или приложением' NOT NULL,
  	"description" varchar NOT NULL,
  	"description_secondary" varchar NOT NULL,
  	"primary_button_label" varchar DEFAULT 'Получить предложение' NOT NULL,
  	"primary_page_key" "hm_pri_pk" DEFAULT 'get-proposal' NOT NULL,
  	"secondary_button_label" varchar DEFAULT 'Посмотреть цены' NOT NULL,
  	"secondary_page_key" "hm_sec_pk" DEFAULT 'pricing' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_steps_method_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"number" varchar NOT NULL,
  	"title" varchar NOT NULL,
  	"subtitle" varchar,
  	"description" varchar NOT NULL,
  	"duration" varchar
  );
  
  CREATE TABLE "pages_blocks_steps_method" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Этапы работы' NOT NULL,
  	"title" varchar DEFAULT 'Как устроен процесс — от первого контакта до передачи в разработку' NOT NULL,
  	"layout_variant" "sm_layout_v" DEFAULT 'detailed' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_deliverables_method_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_deliverables_method" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Результаты' NOT NULL,
  	"title" varchar DEFAULT 'Что вы получаете в результате работы' NOT NULL,
  	"description" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_cta_method" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Готовы начать работу над проектом?' NOT NULL,
  	"description" varchar NOT NULL,
  	"primary_button_label" varchar DEFAULT 'Получить предложение' NOT NULL,
  	"primary_page_key" "ctam_pri_pk" DEFAULT 'get-proposal' NOT NULL,
  	"secondary_button_label" varchar DEFAULT 'Посмотреть цены' NOT NULL,
  	"secondary_page_key" "ctam_sec_pk" DEFAULT 'pricing' NOT NULL,
  	"footer_note" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_hero_proposal_reassurance_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "hppr_icon" DEFAULT 'clock' NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_hero_proposal" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Получить предложение' NOT NULL,
  	"title" varchar DEFAULT 'Закажите дизайн сайта, системы или мобильного приложения' NOT NULL,
  	"description" varchar DEFAULT 'Расскажите, что вы планируете — сайт, корпоративный портал, B2B-систему, dashboard или mobile app. Мы предложим формат работы, сроки и стоимость без обязательного стартового звонка.' NOT NULL,
  	"support_line" varchar DEFAULT '',
  	"brand_paragraph" varchar DEFAULT 'Atelier Meridian помогает founders, B2B-командам, агентствам и integrators превращать идеи, сложные процессы и product requirements в понятную структуру, prototype и материалы для передачи в разработку.' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_trust_proposal_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "tp_icon" DEFAULT 'layers' NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_trust_proposal_support_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_trust_proposal" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Структурный intake для сложных digital-проектов' NOT NULL,
  	"description" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_faq_proposal_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar NOT NULL,
  	"answer" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_faq_proposal" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Частые вопросы' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_proposal_flow_proposal_intro_copy" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_proposal_flow_proposal_intro_process_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "pfp_ip_icon" DEFAULT 'target' NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_proposal_flow_proposal_wizard_copy" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_proposal_flow_proposal_wizard_step_labels" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_proposal_flow_proposal_project_types" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL,
  	"label" varchar NOT NULL,
  	"description" varchar
  );
  
  CREATE TABLE "pages_blocks_proposal_flow_proposal_project_goals" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_proposal_flow_proposal_team_types" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_proposal_flow_proposal_complexity_flags" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_proposal_flow_proposal_materials_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_proposal_flow_proposal_timeline_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_proposal_flow_proposal_budget_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_proposal_flow_proposal_summary_results" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_proposal_flow_proposal_upload_copy" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_proposal_flow_proposal_success_copy" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_proposal_flow_proposal_success_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"number" varchar NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_proposal_flow_proposal" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"success_home_page_key" "pfp_home_pk" DEFAULT 'home' NOT NULL,
  	"success_pricing_page_key" "pfp_price_pk" DEFAULT 'pricing' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_final_support_proposal" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"upload_button_label" varchar NOT NULL,
  	"pricing_button_label" varchar NOT NULL,
  	"pricing_page_key" "enum_pages_blocks_final_support_proposal_pricing_page_key" DEFAULT 'pricing' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_hero_concepts_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_hero_concepts" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Studio Portfolio' NOT NULL,
  	"title" varchar DEFAULT 'Концепты студии' NOT NULL,
  	"description" varchar NOT NULL,
  	"support_line" varchar NOT NULL,
  	"primary_button_label" varchar DEFAULT 'Получить предложение' NOT NULL,
  	"primary_page_key" "hc_pri_pk" DEFAULT 'get-proposal' NOT NULL,
  	"secondary_button_label" varchar DEFAULT 'Посмотреть цены' NOT NULL,
  	"secondary_page_key" "hc_sec_pk" DEFAULT 'pricing' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_intro_concepts_pillars" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "ic_pillar_icon" DEFAULT 'layers' NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_intro_concepts" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'О концептах' NOT NULL,
  	"title" varchar DEFAULT 'Что показывают эти концепты' NOT NULL,
  	"description" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_nav_concepts_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar NOT NULL,
  	"short_label" varchar NOT NULL,
  	"number" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_nav_concepts" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar DEFAULT 'Концепты:' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_concept_section_concept" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar NOT NULL,
  	"section_number" varchar NOT NULL,
  	"category_label" varchar NOT NULL,
  	"title" varchar NOT NULL,
  	"intro" varchar NOT NULL,
  	"image" varchar NOT NULL,
  	"challenge_label" varchar DEFAULT 'Задача' NOT NULL,
  	"challenge" varchar NOT NULL,
  	"structured_label" varchar DEFAULT 'Что структурировали' NOT NULL,
  	"structured" varchar NOT NULL,
  	"delivered_label" varchar DEFAULT 'Что подготовили' NOT NULL,
  	"delivered" varchar NOT NULL,
  	"suitable_for_label" varchar DEFAULT 'Подходит для:' NOT NULL,
  	"suitable_for" varchar NOT NULL,
  	"caption_label" varchar DEFAULT 'Concept' NOT NULL,
  	"caption_studio_label" varchar DEFAULT 'Atelier Meridian Studio' NOT NULL,
  	"layout" "enum_pages_blocks_concept_section_concept_layout" DEFAULT 'imageLeft' NOT NULL,
  	"cta_label" varchar DEFAULT 'Получить предложение' NOT NULL,
  	"cta_page_key" "enum_pages_blocks_concept_section_concept_cta_page_key" DEFAULT 'get-proposal' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_why_concepts_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_pages_blocks_why_concepts_items_icon" NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_why_concepts" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Зачем это важно' NOT NULL,
  	"title" varchar DEFAULT 'Зачем мы показываем студийные концепты' NOT NULL,
  	"description" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_cta_concepts" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Хотите такой же уровень проработки для своего проекта?' NOT NULL,
  	"description" varchar NOT NULL,
  	"primary_button_label" varchar DEFAULT 'Получить предложение' NOT NULL,
  	"primary_page_key" "enum_pages_blocks_cta_concepts_primary_page_key" DEFAULT 'get-proposal' NOT NULL,
  	"secondary_button_label" varchar DEFAULT 'Посмотреть цены' NOT NULL,
  	"secondary_page_key" "enum_pages_blocks_cta_concepts_secondary_page_key" DEFAULT 'pricing' NOT NULL,
  	"footer_note" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"route_type" "enum_pages_route_type" DEFAULT 'custom' NOT NULL,
  	"page_key" "enum_pages_page_key",
  	"internal_name" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "pages_locales" (
  	"slug" varchar,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "proposal_files" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar,
  	"source_type" "enum_proposal_files_source_type" DEFAULT 'proposal-upload' NOT NULL,
  	"request_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE "proposal_requests_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"url" varchar NOT NULL
  );
  
  CREATE TABLE "proposal_requests" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"mode" "enum_proposal_requests_mode" NOT NULL,
  	"locale" "enum_proposal_requests_locale" NOT NULL,
  	"name" varchar,
  	"email" varchar,
  	"company" varchar,
  	"role" varchar,
  	"region" varchar,
  	"phone" varchar,
  	"payload" jsonb NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "proposal_requests_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"proposal_files_id" integer
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer,
  	"media_id" integer,
  	"pages_id" integer,
  	"proposal_files_id" integer,
  	"proposal_requests_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "header_navigation" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"page_key" "enum_header_navigation_page_key" NOT NULL
  );
  
  CREATE TABLE "header" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "header_locales" (
  	"brand_name" varchar NOT NULL,
  	"brand_tagline" varchar NOT NULL,
  	"proposal_button_label" varchar NOT NULL,
  	"mobile_language_label" varchar NOT NULL,
  	"menu_aria_label" varchar DEFAULT 'Toggle menu' NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "footer_columns_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"page_key" "enum_footer_columns_links_page_key",
  	"href" varchar,
  	"anchor" varchar
  );
  
  CREATE TABLE "footer_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_footer_columns_type" DEFAULT 'links' NOT NULL,
  	"title" varchar NOT NULL,
  	"body" varchar,
  	"button_label" varchar,
  	"button_page_key" "enum_footer_columns_button_page_key",
  	"button_href" varchar
  );
  
  CREATE TABLE "footer_bottom_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"page_key" "enum_footer_bottom_links_page_key",
  	"href" varchar,
  	"anchor" varchar
  );
  
  CREATE TABLE "footer" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "footer_locales" (
  	"variant" "enum_footer_variant" DEFAULT 'dark' NOT NULL,
  	"brand_name" varchar NOT NULL,
  	"brand_tagline" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"brand_email" varchar,
  	"bottom_text_template" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero_title_rows_segments" ADD CONSTRAINT "pages_blocks_hero_title_rows_segments_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_hero_title_rows"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero_title_rows" ADD CONSTRAINT "pages_blocks_hero_title_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero_tags" ADD CONSTRAINT "pages_blocks_hero_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero" ADD CONSTRAINT "pages_blocks_hero_desktop_image_id_media_id_fk" FOREIGN KEY ("desktop_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero" ADD CONSTRAINT "pages_blocks_hero_mobile_image_id_media_id_fk" FOREIGN KEY ("mobile_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero" ADD CONSTRAINT "pages_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_value_home_items" ADD CONSTRAINT "pages_blocks_value_home_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_value_home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_value_home" ADD CONSTRAINT "pages_blocks_value_home_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_video_walkthrough_home_meta_badges" ADD CONSTRAINT "pages_blocks_video_walkthrough_home_meta_badges_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_video_walkthrough_home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_video_walkthrough_home_timeline" ADD CONSTRAINT "pages_blocks_video_walkthrough_home_timeline_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_video_walkthrough_home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_video_walkthrough_home_highlights" ADD CONSTRAINT "pages_blocks_video_walkthrough_home_highlights_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_video_walkthrough_home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_video_walkthrough_home" ADD CONSTRAINT "pages_blocks_video_walkthrough_home_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_deliverables_home_items" ADD CONSTRAINT "pages_blocks_deliverables_home_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_deliverables_home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_deliverables_home" ADD CONSTRAINT "pages_blocks_deliverables_home_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_why_home_items" ADD CONSTRAINT "pages_blocks_why_home_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_why_home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_why_home" ADD CONSTRAINT "pages_blocks_why_home_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_audience_home_items" ADD CONSTRAINT "pages_blocks_audience_home_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_audience_home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_audience_home" ADD CONSTRAINT "pages_blocks_audience_home_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_concepts_home_items" ADD CONSTRAINT "pages_blocks_concepts_home_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_concepts_home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_concepts_home" ADD CONSTRAINT "pages_blocks_concepts_home_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_method_home_items_details" ADD CONSTRAINT "pages_blocks_method_home_items_details_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_method_home_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_method_home_items" ADD CONSTRAINT "pages_blocks_method_home_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_method_home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_method_home" ADD CONSTRAINT "pages_blocks_method_home_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing_home_items_includes" ADD CONSTRAINT "pages_blocks_pricing_home_items_includes_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_pricing_home_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing_home_items" ADD CONSTRAINT "pages_blocks_pricing_home_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_pricing_home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing_home" ADD CONSTRAINT "pages_blocks_pricing_home_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_proposal_home_steps" ADD CONSTRAINT "pages_blocks_proposal_home_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_proposal_home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_proposal_home" ADD CONSTRAINT "pages_blocks_proposal_home_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_sample_preview_home_items" ADD CONSTRAINT "pages_blocks_sample_preview_home_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_sample_preview_home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_sample_preview_home" ADD CONSTRAINT "pages_blocks_sample_preview_home_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_trust_home_items" ADD CONSTRAINT "pages_blocks_trust_home_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_trust_home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_trust_home" ADD CONSTRAINT "pages_blocks_trust_home_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq_home_items" ADD CONSTRAINT "pages_blocks_faq_home_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_faq_home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq_home" ADD CONSTRAINT "pages_blocks_faq_home_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_final_cta_home" ADD CONSTRAINT "pages_blocks_final_cta_home_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero_solutions_tags" ADD CONSTRAINT "pages_blocks_hero_solutions_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_hero_solutions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero_solutions" ADD CONSTRAINT "pages_blocks_hero_solutions_image_media_id_media_id_fk" FOREIGN KEY ("image_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero_solutions" ADD CONSTRAINT "pages_blocks_hero_solutions_image_file_id_media_id_fk" FOREIGN KEY ("image_file_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero_solutions" ADD CONSTRAINT "pages_blocks_hero_solutions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_positioning_intro_solutions_items" ADD CONSTRAINT "pages_blocks_positioning_intro_solutions_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_positioning_intro_solutions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_positioning_intro_solutions" ADD CONSTRAINT "pages_blocks_positioning_intro_solutions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_grid_solutions_items" ADD CONSTRAINT "pages_blocks_grid_solutions_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_grid_solutions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_grid_solutions" ADD CONSTRAINT "pages_blocks_grid_solutions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_details_solution_items_when_relevant" ADD CONSTRAINT "pages_blocks_details_solution_items_when_relevant_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_details_solution_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_details_solution_items_what_we_clarify" ADD CONSTRAINT "pages_blocks_details_solution_items_what_we_clarify_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_details_solution_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_details_solution_items_what_client_receives" ADD CONSTRAINT "pages_blocks_details_solution_items_what_client_receives_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_details_solution_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_details_solution_items" ADD CONSTRAINT "pages_blocks_details_solution_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_details_solution"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_details_solution" ADD CONSTRAINT "pages_blocks_details_solution_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_client_artifacts_solutions_items" ADD CONSTRAINT "pages_blocks_client_artifacts_solutions_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_client_artifacts_solutions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_client_artifacts_solutions" ADD CONSTRAINT "pages_blocks_client_artifacts_solutions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_audience_solutions_items" ADD CONSTRAINT "pages_blocks_audience_solutions_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_audience_solutions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_audience_solutions" ADD CONSTRAINT "pages_blocks_audience_solutions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_why_solutions_items" ADD CONSTRAINT "pages_blocks_why_solutions_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_why_solutions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_why_solutions" ADD CONSTRAINT "pages_blocks_why_solutions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_connected_cta_solutions" ADD CONSTRAINT "pages_blocks_connected_cta_solutions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq_solutions_items" ADD CONSTRAINT "pages_blocks_faq_solutions_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_faq_solutions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq_solutions" ADD CONSTRAINT "pages_blocks_faq_solutions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero_startups_tags" ADD CONSTRAINT "pages_blocks_hero_startups_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_hero_startups"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero_startups" ADD CONSTRAINT "pages_blocks_hero_startups_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_value_startups_items" ADD CONSTRAINT "pages_blocks_value_startups_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_value_startups"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_value_startups" ADD CONSTRAINT "pages_blocks_value_startups_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_deliverables_startups_items" ADD CONSTRAINT "pages_blocks_deliverables_startups_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_deliverables_startups"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_deliverables_startups" ADD CONSTRAINT "pages_blocks_deliverables_startups_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_situations_startups_items" ADD CONSTRAINT "pages_blocks_situations_startups_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_situations_startups"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_situations_startups" ADD CONSTRAINT "pages_blocks_situations_startups_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_artifacts_startups_items" ADD CONSTRAINT "pages_blocks_artifacts_startups_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_artifacts_startups"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_artifacts_startups" ADD CONSTRAINT "pages_blocks_artifacts_startups_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_process_startups_steps" ADD CONSTRAINT "pages_blocks_process_startups_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_process_startups"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_process_startups" ADD CONSTRAINT "pages_blocks_process_startups_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_efficiency_startups_items" ADD CONSTRAINT "pages_blocks_efficiency_startups_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_efficiency_startups"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_efficiency_startups" ADD CONSTRAINT "pages_blocks_efficiency_startups_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_concepts_startups_items" ADD CONSTRAINT "pages_blocks_concepts_startups_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_concepts_startups"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_concepts_startups" ADD CONSTRAINT "pages_blocks_concepts_startups_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta_startups" ADD CONSTRAINT "pages_blocks_cta_startups_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq_startups_items" ADD CONSTRAINT "pages_blocks_faq_startups_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_faq_startups"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq_startups" ADD CONSTRAINT "pages_blocks_faq_startups_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero_agencies_partner_tags" ADD CONSTRAINT "pages_blocks_hero_agencies_partner_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_hero_agencies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero_agencies" ADD CONSTRAINT "pages_blocks_hero_agencies_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_partners_clarification_agencies_pillars" ADD CONSTRAINT "pages_blocks_partners_clarification_agencies_pillars_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_partners_clarification_agencies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_partners_clarification_agencies" ADD CONSTRAINT "pages_blocks_partners_clarification_agencies_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_audience_agencies_items" ADD CONSTRAINT "pages_blocks_audience_agencies_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_audience_agencies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_audience_agencies" ADD CONSTRAINT "pages_blocks_audience_agencies_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_value_agencies_items" ADD CONSTRAINT "pages_blocks_value_agencies_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_value_agencies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_value_agencies" ADD CONSTRAINT "pages_blocks_value_agencies_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_projects_agencies_items" ADD CONSTRAINT "pages_blocks_projects_agencies_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_projects_agencies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_projects_agencies" ADD CONSTRAINT "pages_blocks_projects_agencies_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_process_agencies_steps" ADD CONSTRAINT "pages_blocks_process_agencies_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_process_agencies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_process_agencies_markers" ADD CONSTRAINT "pages_blocks_process_agencies_markers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_process_agencies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_process_agencies" ADD CONSTRAINT "pages_blocks_process_agencies_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_artifacts_agencies_items" ADD CONSTRAINT "pages_blocks_artifacts_agencies_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_artifacts_agencies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_artifacts_agencies" ADD CONSTRAINT "pages_blocks_artifacts_agencies_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_why_agencies_items" ADD CONSTRAINT "pages_blocks_why_agencies_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_why_agencies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_why_agencies" ADD CONSTRAINT "pages_blocks_why_agencies_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_concepts_agencies_items" ADD CONSTRAINT "pages_blocks_concepts_agencies_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_concepts_agencies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_concepts_agencies" ADD CONSTRAINT "pages_blocks_concepts_agencies_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta_agencies" ADD CONSTRAINT "pages_blocks_cta_agencies_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq_agencies_items" ADD CONSTRAINT "pages_blocks_faq_agencies_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_faq_agencies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq_agencies" ADD CONSTRAINT "pages_blocks_faq_agencies_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero_pricing_trust_labels" ADD CONSTRAINT "pages_blocks_hero_pricing_trust_labels_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_hero_pricing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero_pricing" ADD CONSTRAINT "pages_blocks_hero_pricing_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_positioning_block_pricing_pillars" ADD CONSTRAINT "pages_blocks_positioning_block_pricing_pillars_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_positioning_block_pricing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_positioning_block_pricing_delivery_elements" ADD CONSTRAINT "pages_blocks_positioning_block_pricing_delivery_elements_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_positioning_block_pricing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_positioning_block_pricing" ADD CONSTRAINT "pages_blocks_positioning_block_pricing_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_package_cards_pricing_packages_includes" ADD CONSTRAINT "pages_blocks_package_cards_pricing_packages_includes_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_package_cards_pricing_packages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_package_cards_pricing_packages" ADD CONSTRAINT "pages_blocks_package_cards_pricing_packages_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_package_cards_pricing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_package_cards_pricing" ADD CONSTRAINT "pages_blocks_package_cards_pricing_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_choosing_guide_pricing_items" ADD CONSTRAINT "pages_blocks_choosing_guide_pricing_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_choosing_guide_pricing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_choosing_guide_pricing" ADD CONSTRAINT "pages_blocks_choosing_guide_pricing_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_deliverables_preview_pricing_items" ADD CONSTRAINT "pages_blocks_deliverables_preview_pricing_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_deliverables_preview_pricing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_deliverables_preview_pricing" ADD CONSTRAINT "pages_blocks_deliverables_preview_pricing_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_price_explanation_pricing_points" ADD CONSTRAINT "pages_blocks_price_explanation_pricing_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_price_explanation_pricing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_price_explanation_pricing" ADD CONSTRAINT "pages_blocks_price_explanation_pricing_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_no_call_cta_pricing_steps" ADD CONSTRAINT "pages_blocks_no_call_cta_pricing_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_no_call_cta_pricing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_no_call_cta_pricing" ADD CONSTRAINT "pages_blocks_no_call_cta_pricing_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq_pricing_items" ADD CONSTRAINT "pages_blocks_faq_pricing_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_faq_pricing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq_pricing" ADD CONSTRAINT "pages_blocks_faq_pricing_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_final_cta_pricing" ADD CONSTRAINT "pages_blocks_final_cta_pricing_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero_method" ADD CONSTRAINT "pages_blocks_hero_method_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_steps_method_steps" ADD CONSTRAINT "pages_blocks_steps_method_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_steps_method"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_steps_method" ADD CONSTRAINT "pages_blocks_steps_method_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_deliverables_method_items" ADD CONSTRAINT "pages_blocks_deliverables_method_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_deliverables_method"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_deliverables_method" ADD CONSTRAINT "pages_blocks_deliverables_method_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta_method" ADD CONSTRAINT "pages_blocks_cta_method_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero_proposal_reassurance_items" ADD CONSTRAINT "pages_blocks_hero_proposal_reassurance_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_hero_proposal"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero_proposal" ADD CONSTRAINT "pages_blocks_hero_proposal_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_trust_proposal_items" ADD CONSTRAINT "pages_blocks_trust_proposal_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_trust_proposal"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_trust_proposal_support_points" ADD CONSTRAINT "pages_blocks_trust_proposal_support_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_trust_proposal"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_trust_proposal" ADD CONSTRAINT "pages_blocks_trust_proposal_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq_proposal_items" ADD CONSTRAINT "pages_blocks_faq_proposal_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_faq_proposal"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq_proposal" ADD CONSTRAINT "pages_blocks_faq_proposal_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_proposal_flow_proposal_intro_copy" ADD CONSTRAINT "pages_blocks_proposal_flow_proposal_intro_copy_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_proposal_flow_proposal"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_proposal_flow_proposal_intro_process_steps" ADD CONSTRAINT "pages_blocks_proposal_flow_proposal_intro_process_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_proposal_flow_proposal"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_proposal_flow_proposal_wizard_copy" ADD CONSTRAINT "pages_blocks_proposal_flow_proposal_wizard_copy_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_proposal_flow_proposal"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_proposal_flow_proposal_wizard_step_labels" ADD CONSTRAINT "pages_blocks_proposal_flow_proposal_wizard_step_labels_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_proposal_flow_proposal"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_proposal_flow_proposal_project_types" ADD CONSTRAINT "pages_blocks_proposal_flow_proposal_project_types_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_proposal_flow_proposal"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_proposal_flow_proposal_project_goals" ADD CONSTRAINT "pages_blocks_proposal_flow_proposal_project_goals_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_proposal_flow_proposal"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_proposal_flow_proposal_team_types" ADD CONSTRAINT "pages_blocks_proposal_flow_proposal_team_types_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_proposal_flow_proposal"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_proposal_flow_proposal_complexity_flags" ADD CONSTRAINT "pages_blocks_proposal_flow_proposal_complexity_flags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_proposal_flow_proposal"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_proposal_flow_proposal_materials_options" ADD CONSTRAINT "pages_blocks_proposal_flow_proposal_materials_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_proposal_flow_proposal"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_proposal_flow_proposal_timeline_options" ADD CONSTRAINT "pages_blocks_proposal_flow_proposal_timeline_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_proposal_flow_proposal"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_proposal_flow_proposal_budget_options" ADD CONSTRAINT "pages_blocks_proposal_flow_proposal_budget_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_proposal_flow_proposal"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_proposal_flow_proposal_summary_results" ADD CONSTRAINT "pages_blocks_proposal_flow_proposal_summary_results_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_proposal_flow_proposal"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_proposal_flow_proposal_upload_copy" ADD CONSTRAINT "pages_blocks_proposal_flow_proposal_upload_copy_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_proposal_flow_proposal"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_proposal_flow_proposal_success_copy" ADD CONSTRAINT "pages_blocks_proposal_flow_proposal_success_copy_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_proposal_flow_proposal"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_proposal_flow_proposal_success_steps" ADD CONSTRAINT "pages_blocks_proposal_flow_proposal_success_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_proposal_flow_proposal"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_proposal_flow_proposal" ADD CONSTRAINT "pages_blocks_proposal_flow_proposal_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_final_support_proposal" ADD CONSTRAINT "pages_blocks_final_support_proposal_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero_concepts_tags" ADD CONSTRAINT "pages_blocks_hero_concepts_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_hero_concepts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero_concepts" ADD CONSTRAINT "pages_blocks_hero_concepts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_intro_concepts_pillars" ADD CONSTRAINT "pages_blocks_intro_concepts_pillars_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_intro_concepts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_intro_concepts" ADD CONSTRAINT "pages_blocks_intro_concepts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_nav_concepts_items" ADD CONSTRAINT "pages_blocks_nav_concepts_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_nav_concepts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_nav_concepts" ADD CONSTRAINT "pages_blocks_nav_concepts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_concept_section_concept" ADD CONSTRAINT "pages_blocks_concept_section_concept_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_why_concepts_items" ADD CONSTRAINT "pages_blocks_why_concepts_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_why_concepts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_why_concepts" ADD CONSTRAINT "pages_blocks_why_concepts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta_concepts" ADD CONSTRAINT "pages_blocks_cta_concepts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_locales" ADD CONSTRAINT "pages_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "proposal_files" ADD CONSTRAINT "proposal_files_request_id_proposal_requests_id_fk" FOREIGN KEY ("request_id") REFERENCES "public"."proposal_requests"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "proposal_requests_links" ADD CONSTRAINT "proposal_requests_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."proposal_requests"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "proposal_requests_rels" ADD CONSTRAINT "proposal_requests_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."proposal_requests"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "proposal_requests_rels" ADD CONSTRAINT "proposal_requests_rels_proposal_files_fk" FOREIGN KEY ("proposal_files_id") REFERENCES "public"."proposal_files"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_proposal_files_fk" FOREIGN KEY ("proposal_files_id") REFERENCES "public"."proposal_files"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_proposal_requests_fk" FOREIGN KEY ("proposal_requests_id") REFERENCES "public"."proposal_requests"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_navigation" ADD CONSTRAINT "header_navigation_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_locales" ADD CONSTRAINT "header_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_columns_links" ADD CONSTRAINT "footer_columns_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_columns" ADD CONSTRAINT "footer_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_bottom_links" ADD CONSTRAINT "footer_bottom_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_locales" ADD CONSTRAINT "footer_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "media_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "media" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX "media_sizes_large_sizes_large_filename_idx" ON "media" USING btree ("sizes_large_filename");
  CREATE INDEX "pages_blocks_hero_title_rows_segments_order_idx" ON "pages_blocks_hero_title_rows_segments" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_title_rows_segments_parent_id_idx" ON "pages_blocks_hero_title_rows_segments" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_title_rows_segments_locale_idx" ON "pages_blocks_hero_title_rows_segments" USING btree ("_locale");
  CREATE INDEX "pages_blocks_hero_title_rows_order_idx" ON "pages_blocks_hero_title_rows" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_title_rows_parent_id_idx" ON "pages_blocks_hero_title_rows" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_title_rows_locale_idx" ON "pages_blocks_hero_title_rows" USING btree ("_locale");
  CREATE INDEX "pages_blocks_hero_tags_order_idx" ON "pages_blocks_hero_tags" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_tags_parent_id_idx" ON "pages_blocks_hero_tags" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_tags_locale_idx" ON "pages_blocks_hero_tags" USING btree ("_locale");
  CREATE INDEX "pages_blocks_hero_order_idx" ON "pages_blocks_hero" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_parent_id_idx" ON "pages_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_path_idx" ON "pages_blocks_hero" USING btree ("_path");
  CREATE INDEX "pages_blocks_hero_locale_idx" ON "pages_blocks_hero" USING btree ("_locale");
  CREATE INDEX "pages_blocks_hero_desktop_image_idx" ON "pages_blocks_hero" USING btree ("desktop_image_id");
  CREATE INDEX "pages_blocks_hero_mobile_image_idx" ON "pages_blocks_hero" USING btree ("mobile_image_id");
  CREATE INDEX "pages_blocks_value_home_items_order_idx" ON "pages_blocks_value_home_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_value_home_items_parent_id_idx" ON "pages_blocks_value_home_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_value_home_items_locale_idx" ON "pages_blocks_value_home_items" USING btree ("_locale");
  CREATE INDEX "pages_blocks_value_home_order_idx" ON "pages_blocks_value_home" USING btree ("_order");
  CREATE INDEX "pages_blocks_value_home_parent_id_idx" ON "pages_blocks_value_home" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_value_home_path_idx" ON "pages_blocks_value_home" USING btree ("_path");
  CREATE INDEX "pages_blocks_value_home_locale_idx" ON "pages_blocks_value_home" USING btree ("_locale");
  CREATE INDEX "pages_blocks_video_walkthrough_home_meta_badges_order_idx" ON "pages_blocks_video_walkthrough_home_meta_badges" USING btree ("_order");
  CREATE INDEX "pages_blocks_video_walkthrough_home_meta_badges_parent_id_idx" ON "pages_blocks_video_walkthrough_home_meta_badges" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_video_walkthrough_home_meta_badges_locale_idx" ON "pages_blocks_video_walkthrough_home_meta_badges" USING btree ("_locale");
  CREATE INDEX "pages_blocks_video_walkthrough_home_timeline_order_idx" ON "pages_blocks_video_walkthrough_home_timeline" USING btree ("_order");
  CREATE INDEX "pages_blocks_video_walkthrough_home_timeline_parent_id_idx" ON "pages_blocks_video_walkthrough_home_timeline" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_video_walkthrough_home_timeline_locale_idx" ON "pages_blocks_video_walkthrough_home_timeline" USING btree ("_locale");
  CREATE INDEX "pages_blocks_video_walkthrough_home_highlights_order_idx" ON "pages_blocks_video_walkthrough_home_highlights" USING btree ("_order");
  CREATE INDEX "pages_blocks_video_walkthrough_home_highlights_parent_id_idx" ON "pages_blocks_video_walkthrough_home_highlights" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_video_walkthrough_home_highlights_locale_idx" ON "pages_blocks_video_walkthrough_home_highlights" USING btree ("_locale");
  CREATE INDEX "pages_blocks_video_walkthrough_home_order_idx" ON "pages_blocks_video_walkthrough_home" USING btree ("_order");
  CREATE INDEX "pages_blocks_video_walkthrough_home_parent_id_idx" ON "pages_blocks_video_walkthrough_home" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_video_walkthrough_home_path_idx" ON "pages_blocks_video_walkthrough_home" USING btree ("_path");
  CREATE INDEX "pages_blocks_video_walkthrough_home_locale_idx" ON "pages_blocks_video_walkthrough_home" USING btree ("_locale");
  CREATE INDEX "pages_blocks_deliverables_home_items_order_idx" ON "pages_blocks_deliverables_home_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_deliverables_home_items_parent_id_idx" ON "pages_blocks_deliverables_home_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_deliverables_home_items_locale_idx" ON "pages_blocks_deliverables_home_items" USING btree ("_locale");
  CREATE INDEX "pages_blocks_deliverables_home_order_idx" ON "pages_blocks_deliverables_home" USING btree ("_order");
  CREATE INDEX "pages_blocks_deliverables_home_parent_id_idx" ON "pages_blocks_deliverables_home" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_deliverables_home_path_idx" ON "pages_blocks_deliverables_home" USING btree ("_path");
  CREATE INDEX "pages_blocks_deliverables_home_locale_idx" ON "pages_blocks_deliverables_home" USING btree ("_locale");
  CREATE INDEX "pages_blocks_why_home_items_order_idx" ON "pages_blocks_why_home_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_why_home_items_parent_id_idx" ON "pages_blocks_why_home_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_why_home_items_locale_idx" ON "pages_blocks_why_home_items" USING btree ("_locale");
  CREATE INDEX "pages_blocks_why_home_order_idx" ON "pages_blocks_why_home" USING btree ("_order");
  CREATE INDEX "pages_blocks_why_home_parent_id_idx" ON "pages_blocks_why_home" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_why_home_path_idx" ON "pages_blocks_why_home" USING btree ("_path");
  CREATE INDEX "pages_blocks_why_home_locale_idx" ON "pages_blocks_why_home" USING btree ("_locale");
  CREATE INDEX "pages_blocks_audience_home_items_order_idx" ON "pages_blocks_audience_home_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_audience_home_items_parent_id_idx" ON "pages_blocks_audience_home_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_audience_home_items_locale_idx" ON "pages_blocks_audience_home_items" USING btree ("_locale");
  CREATE INDEX "pages_blocks_audience_home_order_idx" ON "pages_blocks_audience_home" USING btree ("_order");
  CREATE INDEX "pages_blocks_audience_home_parent_id_idx" ON "pages_blocks_audience_home" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_audience_home_path_idx" ON "pages_blocks_audience_home" USING btree ("_path");
  CREATE INDEX "pages_blocks_audience_home_locale_idx" ON "pages_blocks_audience_home" USING btree ("_locale");
  CREATE INDEX "pages_blocks_concepts_home_items_order_idx" ON "pages_blocks_concepts_home_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_concepts_home_items_parent_id_idx" ON "pages_blocks_concepts_home_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_concepts_home_items_locale_idx" ON "pages_blocks_concepts_home_items" USING btree ("_locale");
  CREATE INDEX "pages_blocks_concepts_home_order_idx" ON "pages_blocks_concepts_home" USING btree ("_order");
  CREATE INDEX "pages_blocks_concepts_home_parent_id_idx" ON "pages_blocks_concepts_home" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_concepts_home_path_idx" ON "pages_blocks_concepts_home" USING btree ("_path");
  CREATE INDEX "pages_blocks_concepts_home_locale_idx" ON "pages_blocks_concepts_home" USING btree ("_locale");
  CREATE INDEX "pages_blocks_method_home_items_details_order_idx" ON "pages_blocks_method_home_items_details" USING btree ("_order");
  CREATE INDEX "pages_blocks_method_home_items_details_parent_id_idx" ON "pages_blocks_method_home_items_details" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_method_home_items_details_locale_idx" ON "pages_blocks_method_home_items_details" USING btree ("_locale");
  CREATE INDEX "pages_blocks_method_home_items_order_idx" ON "pages_blocks_method_home_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_method_home_items_parent_id_idx" ON "pages_blocks_method_home_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_method_home_items_locale_idx" ON "pages_blocks_method_home_items" USING btree ("_locale");
  CREATE INDEX "pages_blocks_method_home_order_idx" ON "pages_blocks_method_home" USING btree ("_order");
  CREATE INDEX "pages_blocks_method_home_parent_id_idx" ON "pages_blocks_method_home" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_method_home_path_idx" ON "pages_blocks_method_home" USING btree ("_path");
  CREATE INDEX "pages_blocks_method_home_locale_idx" ON "pages_blocks_method_home" USING btree ("_locale");
  CREATE INDEX "pages_blocks_pricing_home_items_includes_order_idx" ON "pages_blocks_pricing_home_items_includes" USING btree ("_order");
  CREATE INDEX "pages_blocks_pricing_home_items_includes_parent_id_idx" ON "pages_blocks_pricing_home_items_includes" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_pricing_home_items_includes_locale_idx" ON "pages_blocks_pricing_home_items_includes" USING btree ("_locale");
  CREATE INDEX "pages_blocks_pricing_home_items_order_idx" ON "pages_blocks_pricing_home_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_pricing_home_items_parent_id_idx" ON "pages_blocks_pricing_home_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_pricing_home_items_locale_idx" ON "pages_blocks_pricing_home_items" USING btree ("_locale");
  CREATE INDEX "pages_blocks_pricing_home_order_idx" ON "pages_blocks_pricing_home" USING btree ("_order");
  CREATE INDEX "pages_blocks_pricing_home_parent_id_idx" ON "pages_blocks_pricing_home" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_pricing_home_path_idx" ON "pages_blocks_pricing_home" USING btree ("_path");
  CREATE INDEX "pages_blocks_pricing_home_locale_idx" ON "pages_blocks_pricing_home" USING btree ("_locale");
  CREATE INDEX "pages_blocks_proposal_home_steps_order_idx" ON "pages_blocks_proposal_home_steps" USING btree ("_order");
  CREATE INDEX "pages_blocks_proposal_home_steps_parent_id_idx" ON "pages_blocks_proposal_home_steps" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_proposal_home_steps_locale_idx" ON "pages_blocks_proposal_home_steps" USING btree ("_locale");
  CREATE INDEX "pages_blocks_proposal_home_order_idx" ON "pages_blocks_proposal_home" USING btree ("_order");
  CREATE INDEX "pages_blocks_proposal_home_parent_id_idx" ON "pages_blocks_proposal_home" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_proposal_home_path_idx" ON "pages_blocks_proposal_home" USING btree ("_path");
  CREATE INDEX "pages_blocks_proposal_home_locale_idx" ON "pages_blocks_proposal_home" USING btree ("_locale");
  CREATE INDEX "pages_blocks_sample_preview_home_items_order_idx" ON "pages_blocks_sample_preview_home_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_sample_preview_home_items_parent_id_idx" ON "pages_blocks_sample_preview_home_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_sample_preview_home_items_locale_idx" ON "pages_blocks_sample_preview_home_items" USING btree ("_locale");
  CREATE INDEX "pages_blocks_sample_preview_home_order_idx" ON "pages_blocks_sample_preview_home" USING btree ("_order");
  CREATE INDEX "pages_blocks_sample_preview_home_parent_id_idx" ON "pages_blocks_sample_preview_home" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_sample_preview_home_path_idx" ON "pages_blocks_sample_preview_home" USING btree ("_path");
  CREATE INDEX "pages_blocks_sample_preview_home_locale_idx" ON "pages_blocks_sample_preview_home" USING btree ("_locale");
  CREATE INDEX "pages_blocks_trust_home_items_order_idx" ON "pages_blocks_trust_home_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_trust_home_items_parent_id_idx" ON "pages_blocks_trust_home_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_trust_home_items_locale_idx" ON "pages_blocks_trust_home_items" USING btree ("_locale");
  CREATE INDEX "pages_blocks_trust_home_order_idx" ON "pages_blocks_trust_home" USING btree ("_order");
  CREATE INDEX "pages_blocks_trust_home_parent_id_idx" ON "pages_blocks_trust_home" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_trust_home_path_idx" ON "pages_blocks_trust_home" USING btree ("_path");
  CREATE INDEX "pages_blocks_trust_home_locale_idx" ON "pages_blocks_trust_home" USING btree ("_locale");
  CREATE INDEX "pages_blocks_faq_home_items_order_idx" ON "pages_blocks_faq_home_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq_home_items_parent_id_idx" ON "pages_blocks_faq_home_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_home_items_locale_idx" ON "pages_blocks_faq_home_items" USING btree ("_locale");
  CREATE INDEX "pages_blocks_faq_home_order_idx" ON "pages_blocks_faq_home" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq_home_parent_id_idx" ON "pages_blocks_faq_home" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_home_path_idx" ON "pages_blocks_faq_home" USING btree ("_path");
  CREATE INDEX "pages_blocks_faq_home_locale_idx" ON "pages_blocks_faq_home" USING btree ("_locale");
  CREATE INDEX "pages_blocks_final_cta_home_order_idx" ON "pages_blocks_final_cta_home" USING btree ("_order");
  CREATE INDEX "pages_blocks_final_cta_home_parent_id_idx" ON "pages_blocks_final_cta_home" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_final_cta_home_path_idx" ON "pages_blocks_final_cta_home" USING btree ("_path");
  CREATE INDEX "pages_blocks_final_cta_home_locale_idx" ON "pages_blocks_final_cta_home" USING btree ("_locale");
  CREATE INDEX "pages_blocks_hero_solutions_tags_order_idx" ON "pages_blocks_hero_solutions_tags" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_solutions_tags_parent_id_idx" ON "pages_blocks_hero_solutions_tags" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_solutions_tags_locale_idx" ON "pages_blocks_hero_solutions_tags" USING btree ("_locale");
  CREATE INDEX "pages_blocks_hero_solutions_order_idx" ON "pages_blocks_hero_solutions" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_solutions_parent_id_idx" ON "pages_blocks_hero_solutions" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_solutions_path_idx" ON "pages_blocks_hero_solutions" USING btree ("_path");
  CREATE INDEX "pages_blocks_hero_solutions_locale_idx" ON "pages_blocks_hero_solutions" USING btree ("_locale");
  CREATE INDEX "pages_blocks_hero_solutions_image_media_idx" ON "pages_blocks_hero_solutions" USING btree ("image_media_id");
  CREATE INDEX "pages_blocks_hero_solutions_image_file_idx" ON "pages_blocks_hero_solutions" USING btree ("image_file_id");
  CREATE INDEX "pages_blocks_positioning_intro_solutions_items_order_idx" ON "pages_blocks_positioning_intro_solutions_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_positioning_intro_solutions_items_parent_id_idx" ON "pages_blocks_positioning_intro_solutions_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_positioning_intro_solutions_items_locale_idx" ON "pages_blocks_positioning_intro_solutions_items" USING btree ("_locale");
  CREATE INDEX "pages_blocks_positioning_intro_solutions_order_idx" ON "pages_blocks_positioning_intro_solutions" USING btree ("_order");
  CREATE INDEX "pages_blocks_positioning_intro_solutions_parent_id_idx" ON "pages_blocks_positioning_intro_solutions" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_positioning_intro_solutions_path_idx" ON "pages_blocks_positioning_intro_solutions" USING btree ("_path");
  CREATE INDEX "pages_blocks_positioning_intro_solutions_locale_idx" ON "pages_blocks_positioning_intro_solutions" USING btree ("_locale");
  CREATE INDEX "pages_blocks_grid_solutions_items_order_idx" ON "pages_blocks_grid_solutions_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_grid_solutions_items_parent_id_idx" ON "pages_blocks_grid_solutions_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_grid_solutions_items_locale_idx" ON "pages_blocks_grid_solutions_items" USING btree ("_locale");
  CREATE INDEX "pages_blocks_grid_solutions_order_idx" ON "pages_blocks_grid_solutions" USING btree ("_order");
  CREATE INDEX "pages_blocks_grid_solutions_parent_id_idx" ON "pages_blocks_grid_solutions" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_grid_solutions_path_idx" ON "pages_blocks_grid_solutions" USING btree ("_path");
  CREATE INDEX "pages_blocks_grid_solutions_locale_idx" ON "pages_blocks_grid_solutions" USING btree ("_locale");
  CREATE INDEX "pages_blocks_details_solution_items_when_relevant_order_idx" ON "pages_blocks_details_solution_items_when_relevant" USING btree ("_order");
  CREATE INDEX "pages_blocks_details_solution_items_when_relevant_parent_id_idx" ON "pages_blocks_details_solution_items_when_relevant" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_details_solution_items_when_relevant_locale_idx" ON "pages_blocks_details_solution_items_when_relevant" USING btree ("_locale");
  CREATE INDEX "pages_blocks_details_solution_items_what_we_clarify_order_idx" ON "pages_blocks_details_solution_items_what_we_clarify" USING btree ("_order");
  CREATE INDEX "pages_blocks_details_solution_items_what_we_clarify_parent_id_idx" ON "pages_blocks_details_solution_items_what_we_clarify" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_details_solution_items_what_we_clarify_locale_idx" ON "pages_blocks_details_solution_items_what_we_clarify" USING btree ("_locale");
  CREATE INDEX "pages_blocks_details_solution_items_what_client_receives_order_idx" ON "pages_blocks_details_solution_items_what_client_receives" USING btree ("_order");
  CREATE INDEX "pages_blocks_details_solution_items_what_client_receives_parent_id_idx" ON "pages_blocks_details_solution_items_what_client_receives" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_details_solution_items_what_client_receives_locale_idx" ON "pages_blocks_details_solution_items_what_client_receives" USING btree ("_locale");
  CREATE INDEX "pages_blocks_details_solution_items_order_idx" ON "pages_blocks_details_solution_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_details_solution_items_parent_id_idx" ON "pages_blocks_details_solution_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_details_solution_items_locale_idx" ON "pages_blocks_details_solution_items" USING btree ("_locale");
  CREATE INDEX "pages_blocks_details_solution_order_idx" ON "pages_blocks_details_solution" USING btree ("_order");
  CREATE INDEX "pages_blocks_details_solution_parent_id_idx" ON "pages_blocks_details_solution" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_details_solution_path_idx" ON "pages_blocks_details_solution" USING btree ("_path");
  CREATE INDEX "pages_blocks_details_solution_locale_idx" ON "pages_blocks_details_solution" USING btree ("_locale");
  CREATE INDEX "pages_blocks_client_artifacts_solutions_items_order_idx" ON "pages_blocks_client_artifacts_solutions_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_client_artifacts_solutions_items_parent_id_idx" ON "pages_blocks_client_artifacts_solutions_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_client_artifacts_solutions_items_locale_idx" ON "pages_blocks_client_artifacts_solutions_items" USING btree ("_locale");
  CREATE INDEX "pages_blocks_client_artifacts_solutions_order_idx" ON "pages_blocks_client_artifacts_solutions" USING btree ("_order");
  CREATE INDEX "pages_blocks_client_artifacts_solutions_parent_id_idx" ON "pages_blocks_client_artifacts_solutions" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_client_artifacts_solutions_path_idx" ON "pages_blocks_client_artifacts_solutions" USING btree ("_path");
  CREATE INDEX "pages_blocks_client_artifacts_solutions_locale_idx" ON "pages_blocks_client_artifacts_solutions" USING btree ("_locale");
  CREATE INDEX "pages_blocks_audience_solutions_items_order_idx" ON "pages_blocks_audience_solutions_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_audience_solutions_items_parent_id_idx" ON "pages_blocks_audience_solutions_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_audience_solutions_items_locale_idx" ON "pages_blocks_audience_solutions_items" USING btree ("_locale");
  CREATE INDEX "pages_blocks_audience_solutions_order_idx" ON "pages_blocks_audience_solutions" USING btree ("_order");
  CREATE INDEX "pages_blocks_audience_solutions_parent_id_idx" ON "pages_blocks_audience_solutions" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_audience_solutions_path_idx" ON "pages_blocks_audience_solutions" USING btree ("_path");
  CREATE INDEX "pages_blocks_audience_solutions_locale_idx" ON "pages_blocks_audience_solutions" USING btree ("_locale");
  CREATE INDEX "pages_blocks_why_solutions_items_order_idx" ON "pages_blocks_why_solutions_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_why_solutions_items_parent_id_idx" ON "pages_blocks_why_solutions_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_why_solutions_items_locale_idx" ON "pages_blocks_why_solutions_items" USING btree ("_locale");
  CREATE INDEX "pages_blocks_why_solutions_order_idx" ON "pages_blocks_why_solutions" USING btree ("_order");
  CREATE INDEX "pages_blocks_why_solutions_parent_id_idx" ON "pages_blocks_why_solutions" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_why_solutions_path_idx" ON "pages_blocks_why_solutions" USING btree ("_path");
  CREATE INDEX "pages_blocks_why_solutions_locale_idx" ON "pages_blocks_why_solutions" USING btree ("_locale");
  CREATE INDEX "pages_blocks_connected_cta_solutions_order_idx" ON "pages_blocks_connected_cta_solutions" USING btree ("_order");
  CREATE INDEX "pages_blocks_connected_cta_solutions_parent_id_idx" ON "pages_blocks_connected_cta_solutions" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_connected_cta_solutions_path_idx" ON "pages_blocks_connected_cta_solutions" USING btree ("_path");
  CREATE INDEX "pages_blocks_connected_cta_solutions_locale_idx" ON "pages_blocks_connected_cta_solutions" USING btree ("_locale");
  CREATE INDEX "pages_blocks_faq_solutions_items_order_idx" ON "pages_blocks_faq_solutions_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq_solutions_items_parent_id_idx" ON "pages_blocks_faq_solutions_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_solutions_items_locale_idx" ON "pages_blocks_faq_solutions_items" USING btree ("_locale");
  CREATE INDEX "pages_blocks_faq_solutions_order_idx" ON "pages_blocks_faq_solutions" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq_solutions_parent_id_idx" ON "pages_blocks_faq_solutions" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_solutions_path_idx" ON "pages_blocks_faq_solutions" USING btree ("_path");
  CREATE INDEX "pages_blocks_faq_solutions_locale_idx" ON "pages_blocks_faq_solutions" USING btree ("_locale");
  CREATE INDEX "pages_blocks_hero_startups_tags_order_idx" ON "pages_blocks_hero_startups_tags" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_startups_tags_parent_id_idx" ON "pages_blocks_hero_startups_tags" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_startups_tags_locale_idx" ON "pages_blocks_hero_startups_tags" USING btree ("_locale");
  CREATE INDEX "pages_blocks_hero_startups_order_idx" ON "pages_blocks_hero_startups" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_startups_parent_id_idx" ON "pages_blocks_hero_startups" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_startups_path_idx" ON "pages_blocks_hero_startups" USING btree ("_path");
  CREATE INDEX "pages_blocks_hero_startups_locale_idx" ON "pages_blocks_hero_startups" USING btree ("_locale");
  CREATE INDEX "pages_blocks_value_startups_items_order_idx" ON "pages_blocks_value_startups_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_value_startups_items_parent_id_idx" ON "pages_blocks_value_startups_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_value_startups_items_locale_idx" ON "pages_blocks_value_startups_items" USING btree ("_locale");
  CREATE INDEX "pages_blocks_value_startups_order_idx" ON "pages_blocks_value_startups" USING btree ("_order");
  CREATE INDEX "pages_blocks_value_startups_parent_id_idx" ON "pages_blocks_value_startups" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_value_startups_path_idx" ON "pages_blocks_value_startups" USING btree ("_path");
  CREATE INDEX "pages_blocks_value_startups_locale_idx" ON "pages_blocks_value_startups" USING btree ("_locale");
  CREATE INDEX "pages_blocks_deliverables_startups_items_order_idx" ON "pages_blocks_deliverables_startups_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_deliverables_startups_items_parent_id_idx" ON "pages_blocks_deliverables_startups_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_deliverables_startups_items_locale_idx" ON "pages_blocks_deliverables_startups_items" USING btree ("_locale");
  CREATE INDEX "pages_blocks_deliverables_startups_order_idx" ON "pages_blocks_deliverables_startups" USING btree ("_order");
  CREATE INDEX "pages_blocks_deliverables_startups_parent_id_idx" ON "pages_blocks_deliverables_startups" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_deliverables_startups_path_idx" ON "pages_blocks_deliverables_startups" USING btree ("_path");
  CREATE INDEX "pages_blocks_deliverables_startups_locale_idx" ON "pages_blocks_deliverables_startups" USING btree ("_locale");
  CREATE INDEX "pages_blocks_situations_startups_items_order_idx" ON "pages_blocks_situations_startups_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_situations_startups_items_parent_id_idx" ON "pages_blocks_situations_startups_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_situations_startups_items_locale_idx" ON "pages_blocks_situations_startups_items" USING btree ("_locale");
  CREATE INDEX "pages_blocks_situations_startups_order_idx" ON "pages_blocks_situations_startups" USING btree ("_order");
  CREATE INDEX "pages_blocks_situations_startups_parent_id_idx" ON "pages_blocks_situations_startups" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_situations_startups_path_idx" ON "pages_blocks_situations_startups" USING btree ("_path");
  CREATE INDEX "pages_blocks_situations_startups_locale_idx" ON "pages_blocks_situations_startups" USING btree ("_locale");
  CREATE INDEX "pages_blocks_artifacts_startups_items_order_idx" ON "pages_blocks_artifacts_startups_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_artifacts_startups_items_parent_id_idx" ON "pages_blocks_artifacts_startups_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_artifacts_startups_items_locale_idx" ON "pages_blocks_artifacts_startups_items" USING btree ("_locale");
  CREATE INDEX "pages_blocks_artifacts_startups_order_idx" ON "pages_blocks_artifacts_startups" USING btree ("_order");
  CREATE INDEX "pages_blocks_artifacts_startups_parent_id_idx" ON "pages_blocks_artifacts_startups" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_artifacts_startups_path_idx" ON "pages_blocks_artifacts_startups" USING btree ("_path");
  CREATE INDEX "pages_blocks_artifacts_startups_locale_idx" ON "pages_blocks_artifacts_startups" USING btree ("_locale");
  CREATE INDEX "pages_blocks_process_startups_steps_order_idx" ON "pages_blocks_process_startups_steps" USING btree ("_order");
  CREATE INDEX "pages_blocks_process_startups_steps_parent_id_idx" ON "pages_blocks_process_startups_steps" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_process_startups_steps_locale_idx" ON "pages_blocks_process_startups_steps" USING btree ("_locale");
  CREATE INDEX "pages_blocks_process_startups_order_idx" ON "pages_blocks_process_startups" USING btree ("_order");
  CREATE INDEX "pages_blocks_process_startups_parent_id_idx" ON "pages_blocks_process_startups" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_process_startups_path_idx" ON "pages_blocks_process_startups" USING btree ("_path");
  CREATE INDEX "pages_blocks_process_startups_locale_idx" ON "pages_blocks_process_startups" USING btree ("_locale");
  CREATE INDEX "pages_blocks_efficiency_startups_items_order_idx" ON "pages_blocks_efficiency_startups_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_efficiency_startups_items_parent_id_idx" ON "pages_blocks_efficiency_startups_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_efficiency_startups_items_locale_idx" ON "pages_blocks_efficiency_startups_items" USING btree ("_locale");
  CREATE INDEX "pages_blocks_efficiency_startups_order_idx" ON "pages_blocks_efficiency_startups" USING btree ("_order");
  CREATE INDEX "pages_blocks_efficiency_startups_parent_id_idx" ON "pages_blocks_efficiency_startups" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_efficiency_startups_path_idx" ON "pages_blocks_efficiency_startups" USING btree ("_path");
  CREATE INDEX "pages_blocks_efficiency_startups_locale_idx" ON "pages_blocks_efficiency_startups" USING btree ("_locale");
  CREATE INDEX "pages_blocks_concepts_startups_items_order_idx" ON "pages_blocks_concepts_startups_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_concepts_startups_items_parent_id_idx" ON "pages_blocks_concepts_startups_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_concepts_startups_items_locale_idx" ON "pages_blocks_concepts_startups_items" USING btree ("_locale");
  CREATE INDEX "pages_blocks_concepts_startups_order_idx" ON "pages_blocks_concepts_startups" USING btree ("_order");
  CREATE INDEX "pages_blocks_concepts_startups_parent_id_idx" ON "pages_blocks_concepts_startups" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_concepts_startups_path_idx" ON "pages_blocks_concepts_startups" USING btree ("_path");
  CREATE INDEX "pages_blocks_concepts_startups_locale_idx" ON "pages_blocks_concepts_startups" USING btree ("_locale");
  CREATE INDEX "pages_blocks_cta_startups_order_idx" ON "pages_blocks_cta_startups" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta_startups_parent_id_idx" ON "pages_blocks_cta_startups" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta_startups_path_idx" ON "pages_blocks_cta_startups" USING btree ("_path");
  CREATE INDEX "pages_blocks_cta_startups_locale_idx" ON "pages_blocks_cta_startups" USING btree ("_locale");
  CREATE INDEX "pages_blocks_faq_startups_items_order_idx" ON "pages_blocks_faq_startups_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq_startups_items_parent_id_idx" ON "pages_blocks_faq_startups_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_startups_items_locale_idx" ON "pages_blocks_faq_startups_items" USING btree ("_locale");
  CREATE INDEX "pages_blocks_faq_startups_order_idx" ON "pages_blocks_faq_startups" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq_startups_parent_id_idx" ON "pages_blocks_faq_startups" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_startups_path_idx" ON "pages_blocks_faq_startups" USING btree ("_path");
  CREATE INDEX "pages_blocks_faq_startups_locale_idx" ON "pages_blocks_faq_startups" USING btree ("_locale");
  CREATE INDEX "pages_blocks_hero_agencies_partner_tags_order_idx" ON "pages_blocks_hero_agencies_partner_tags" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_agencies_partner_tags_parent_id_idx" ON "pages_blocks_hero_agencies_partner_tags" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_agencies_partner_tags_locale_idx" ON "pages_blocks_hero_agencies_partner_tags" USING btree ("_locale");
  CREATE INDEX "pages_blocks_hero_agencies_order_idx" ON "pages_blocks_hero_agencies" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_agencies_parent_id_idx" ON "pages_blocks_hero_agencies" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_agencies_path_idx" ON "pages_blocks_hero_agencies" USING btree ("_path");
  CREATE INDEX "pages_blocks_hero_agencies_locale_idx" ON "pages_blocks_hero_agencies" USING btree ("_locale");
  CREATE INDEX "pages_blocks_partners_clarification_agencies_pillars_order_idx" ON "pages_blocks_partners_clarification_agencies_pillars" USING btree ("_order");
  CREATE INDEX "pages_blocks_partners_clarification_agencies_pillars_parent_id_idx" ON "pages_blocks_partners_clarification_agencies_pillars" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_partners_clarification_agencies_pillars_locale_idx" ON "pages_blocks_partners_clarification_agencies_pillars" USING btree ("_locale");
  CREATE INDEX "pages_blocks_partners_clarification_agencies_order_idx" ON "pages_blocks_partners_clarification_agencies" USING btree ("_order");
  CREATE INDEX "pages_blocks_partners_clarification_agencies_parent_id_idx" ON "pages_blocks_partners_clarification_agencies" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_partners_clarification_agencies_path_idx" ON "pages_blocks_partners_clarification_agencies" USING btree ("_path");
  CREATE INDEX "pages_blocks_partners_clarification_agencies_locale_idx" ON "pages_blocks_partners_clarification_agencies" USING btree ("_locale");
  CREATE INDEX "pages_blocks_audience_agencies_items_order_idx" ON "pages_blocks_audience_agencies_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_audience_agencies_items_parent_id_idx" ON "pages_blocks_audience_agencies_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_audience_agencies_items_locale_idx" ON "pages_blocks_audience_agencies_items" USING btree ("_locale");
  CREATE INDEX "pages_blocks_audience_agencies_order_idx" ON "pages_blocks_audience_agencies" USING btree ("_order");
  CREATE INDEX "pages_blocks_audience_agencies_parent_id_idx" ON "pages_blocks_audience_agencies" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_audience_agencies_path_idx" ON "pages_blocks_audience_agencies" USING btree ("_path");
  CREATE INDEX "pages_blocks_audience_agencies_locale_idx" ON "pages_blocks_audience_agencies" USING btree ("_locale");
  CREATE INDEX "pages_blocks_value_agencies_items_order_idx" ON "pages_blocks_value_agencies_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_value_agencies_items_parent_id_idx" ON "pages_blocks_value_agencies_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_value_agencies_items_locale_idx" ON "pages_blocks_value_agencies_items" USING btree ("_locale");
  CREATE INDEX "pages_blocks_value_agencies_order_idx" ON "pages_blocks_value_agencies" USING btree ("_order");
  CREATE INDEX "pages_blocks_value_agencies_parent_id_idx" ON "pages_blocks_value_agencies" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_value_agencies_path_idx" ON "pages_blocks_value_agencies" USING btree ("_path");
  CREATE INDEX "pages_blocks_value_agencies_locale_idx" ON "pages_blocks_value_agencies" USING btree ("_locale");
  CREATE INDEX "pages_blocks_projects_agencies_items_order_idx" ON "pages_blocks_projects_agencies_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_projects_agencies_items_parent_id_idx" ON "pages_blocks_projects_agencies_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_projects_agencies_items_locale_idx" ON "pages_blocks_projects_agencies_items" USING btree ("_locale");
  CREATE INDEX "pages_blocks_projects_agencies_order_idx" ON "pages_blocks_projects_agencies" USING btree ("_order");
  CREATE INDEX "pages_blocks_projects_agencies_parent_id_idx" ON "pages_blocks_projects_agencies" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_projects_agencies_path_idx" ON "pages_blocks_projects_agencies" USING btree ("_path");
  CREATE INDEX "pages_blocks_projects_agencies_locale_idx" ON "pages_blocks_projects_agencies" USING btree ("_locale");
  CREATE INDEX "pages_blocks_process_agencies_steps_order_idx" ON "pages_blocks_process_agencies_steps" USING btree ("_order");
  CREATE INDEX "pages_blocks_process_agencies_steps_parent_id_idx" ON "pages_blocks_process_agencies_steps" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_process_agencies_steps_locale_idx" ON "pages_blocks_process_agencies_steps" USING btree ("_locale");
  CREATE INDEX "pages_blocks_process_agencies_markers_order_idx" ON "pages_blocks_process_agencies_markers" USING btree ("_order");
  CREATE INDEX "pages_blocks_process_agencies_markers_parent_id_idx" ON "pages_blocks_process_agencies_markers" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_process_agencies_markers_locale_idx" ON "pages_blocks_process_agencies_markers" USING btree ("_locale");
  CREATE INDEX "pages_blocks_process_agencies_order_idx" ON "pages_blocks_process_agencies" USING btree ("_order");
  CREATE INDEX "pages_blocks_process_agencies_parent_id_idx" ON "pages_blocks_process_agencies" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_process_agencies_path_idx" ON "pages_blocks_process_agencies" USING btree ("_path");
  CREATE INDEX "pages_blocks_process_agencies_locale_idx" ON "pages_blocks_process_agencies" USING btree ("_locale");
  CREATE INDEX "pages_blocks_artifacts_agencies_items_order_idx" ON "pages_blocks_artifacts_agencies_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_artifacts_agencies_items_parent_id_idx" ON "pages_blocks_artifacts_agencies_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_artifacts_agencies_items_locale_idx" ON "pages_blocks_artifacts_agencies_items" USING btree ("_locale");
  CREATE INDEX "pages_blocks_artifacts_agencies_order_idx" ON "pages_blocks_artifacts_agencies" USING btree ("_order");
  CREATE INDEX "pages_blocks_artifacts_agencies_parent_id_idx" ON "pages_blocks_artifacts_agencies" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_artifacts_agencies_path_idx" ON "pages_blocks_artifacts_agencies" USING btree ("_path");
  CREATE INDEX "pages_blocks_artifacts_agencies_locale_idx" ON "pages_blocks_artifacts_agencies" USING btree ("_locale");
  CREATE INDEX "pages_blocks_why_agencies_items_order_idx" ON "pages_blocks_why_agencies_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_why_agencies_items_parent_id_idx" ON "pages_blocks_why_agencies_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_why_agencies_items_locale_idx" ON "pages_blocks_why_agencies_items" USING btree ("_locale");
  CREATE INDEX "pages_blocks_why_agencies_order_idx" ON "pages_blocks_why_agencies" USING btree ("_order");
  CREATE INDEX "pages_blocks_why_agencies_parent_id_idx" ON "pages_blocks_why_agencies" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_why_agencies_path_idx" ON "pages_blocks_why_agencies" USING btree ("_path");
  CREATE INDEX "pages_blocks_why_agencies_locale_idx" ON "pages_blocks_why_agencies" USING btree ("_locale");
  CREATE INDEX "pages_blocks_concepts_agencies_items_order_idx" ON "pages_blocks_concepts_agencies_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_concepts_agencies_items_parent_id_idx" ON "pages_blocks_concepts_agencies_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_concepts_agencies_items_locale_idx" ON "pages_blocks_concepts_agencies_items" USING btree ("_locale");
  CREATE INDEX "pages_blocks_concepts_agencies_order_idx" ON "pages_blocks_concepts_agencies" USING btree ("_order");
  CREATE INDEX "pages_blocks_concepts_agencies_parent_id_idx" ON "pages_blocks_concepts_agencies" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_concepts_agencies_path_idx" ON "pages_blocks_concepts_agencies" USING btree ("_path");
  CREATE INDEX "pages_blocks_concepts_agencies_locale_idx" ON "pages_blocks_concepts_agencies" USING btree ("_locale");
  CREATE INDEX "pages_blocks_cta_agencies_order_idx" ON "pages_blocks_cta_agencies" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta_agencies_parent_id_idx" ON "pages_blocks_cta_agencies" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta_agencies_path_idx" ON "pages_blocks_cta_agencies" USING btree ("_path");
  CREATE INDEX "pages_blocks_cta_agencies_locale_idx" ON "pages_blocks_cta_agencies" USING btree ("_locale");
  CREATE INDEX "pages_blocks_faq_agencies_items_order_idx" ON "pages_blocks_faq_agencies_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq_agencies_items_parent_id_idx" ON "pages_blocks_faq_agencies_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_agencies_items_locale_idx" ON "pages_blocks_faq_agencies_items" USING btree ("_locale");
  CREATE INDEX "pages_blocks_faq_agencies_order_idx" ON "pages_blocks_faq_agencies" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq_agencies_parent_id_idx" ON "pages_blocks_faq_agencies" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_agencies_path_idx" ON "pages_blocks_faq_agencies" USING btree ("_path");
  CREATE INDEX "pages_blocks_faq_agencies_locale_idx" ON "pages_blocks_faq_agencies" USING btree ("_locale");
  CREATE INDEX "pages_blocks_hero_pricing_trust_labels_order_idx" ON "pages_blocks_hero_pricing_trust_labels" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_pricing_trust_labels_parent_id_idx" ON "pages_blocks_hero_pricing_trust_labels" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_pricing_trust_labels_locale_idx" ON "pages_blocks_hero_pricing_trust_labels" USING btree ("_locale");
  CREATE INDEX "pages_blocks_hero_pricing_order_idx" ON "pages_blocks_hero_pricing" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_pricing_parent_id_idx" ON "pages_blocks_hero_pricing" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_pricing_path_idx" ON "pages_blocks_hero_pricing" USING btree ("_path");
  CREATE INDEX "pages_blocks_hero_pricing_locale_idx" ON "pages_blocks_hero_pricing" USING btree ("_locale");
  CREATE INDEX "pages_blocks_positioning_block_pricing_pillars_order_idx" ON "pages_blocks_positioning_block_pricing_pillars" USING btree ("_order");
  CREATE INDEX "pages_blocks_positioning_block_pricing_pillars_parent_id_idx" ON "pages_blocks_positioning_block_pricing_pillars" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_positioning_block_pricing_pillars_locale_idx" ON "pages_blocks_positioning_block_pricing_pillars" USING btree ("_locale");
  CREATE INDEX "pages_blocks_positioning_block_pricing_delivery_elements_order_idx" ON "pages_blocks_positioning_block_pricing_delivery_elements" USING btree ("_order");
  CREATE INDEX "pages_blocks_positioning_block_pricing_delivery_elements_parent_id_idx" ON "pages_blocks_positioning_block_pricing_delivery_elements" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_positioning_block_pricing_delivery_elements_locale_idx" ON "pages_blocks_positioning_block_pricing_delivery_elements" USING btree ("_locale");
  CREATE INDEX "pages_blocks_positioning_block_pricing_order_idx" ON "pages_blocks_positioning_block_pricing" USING btree ("_order");
  CREATE INDEX "pages_blocks_positioning_block_pricing_parent_id_idx" ON "pages_blocks_positioning_block_pricing" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_positioning_block_pricing_path_idx" ON "pages_blocks_positioning_block_pricing" USING btree ("_path");
  CREATE INDEX "pages_blocks_positioning_block_pricing_locale_idx" ON "pages_blocks_positioning_block_pricing" USING btree ("_locale");
  CREATE INDEX "pages_blocks_package_cards_pricing_packages_includes_order_idx" ON "pages_blocks_package_cards_pricing_packages_includes" USING btree ("_order");
  CREATE INDEX "pages_blocks_package_cards_pricing_packages_includes_parent_id_idx" ON "pages_blocks_package_cards_pricing_packages_includes" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_package_cards_pricing_packages_includes_locale_idx" ON "pages_blocks_package_cards_pricing_packages_includes" USING btree ("_locale");
  CREATE INDEX "pages_blocks_package_cards_pricing_packages_order_idx" ON "pages_blocks_package_cards_pricing_packages" USING btree ("_order");
  CREATE INDEX "pages_blocks_package_cards_pricing_packages_parent_id_idx" ON "pages_blocks_package_cards_pricing_packages" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_package_cards_pricing_packages_locale_idx" ON "pages_blocks_package_cards_pricing_packages" USING btree ("_locale");
  CREATE INDEX "pages_blocks_package_cards_pricing_order_idx" ON "pages_blocks_package_cards_pricing" USING btree ("_order");
  CREATE INDEX "pages_blocks_package_cards_pricing_parent_id_idx" ON "pages_blocks_package_cards_pricing" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_package_cards_pricing_path_idx" ON "pages_blocks_package_cards_pricing" USING btree ("_path");
  CREATE INDEX "pages_blocks_package_cards_pricing_locale_idx" ON "pages_blocks_package_cards_pricing" USING btree ("_locale");
  CREATE INDEX "pages_blocks_choosing_guide_pricing_items_order_idx" ON "pages_blocks_choosing_guide_pricing_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_choosing_guide_pricing_items_parent_id_idx" ON "pages_blocks_choosing_guide_pricing_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_choosing_guide_pricing_items_locale_idx" ON "pages_blocks_choosing_guide_pricing_items" USING btree ("_locale");
  CREATE INDEX "pages_blocks_choosing_guide_pricing_order_idx" ON "pages_blocks_choosing_guide_pricing" USING btree ("_order");
  CREATE INDEX "pages_blocks_choosing_guide_pricing_parent_id_idx" ON "pages_blocks_choosing_guide_pricing" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_choosing_guide_pricing_path_idx" ON "pages_blocks_choosing_guide_pricing" USING btree ("_path");
  CREATE INDEX "pages_blocks_choosing_guide_pricing_locale_idx" ON "pages_blocks_choosing_guide_pricing" USING btree ("_locale");
  CREATE INDEX "pages_blocks_deliverables_preview_pricing_items_order_idx" ON "pages_blocks_deliverables_preview_pricing_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_deliverables_preview_pricing_items_parent_id_idx" ON "pages_blocks_deliverables_preview_pricing_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_deliverables_preview_pricing_items_locale_idx" ON "pages_blocks_deliverables_preview_pricing_items" USING btree ("_locale");
  CREATE INDEX "pages_blocks_deliverables_preview_pricing_order_idx" ON "pages_blocks_deliverables_preview_pricing" USING btree ("_order");
  CREATE INDEX "pages_blocks_deliverables_preview_pricing_parent_id_idx" ON "pages_blocks_deliverables_preview_pricing" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_deliverables_preview_pricing_path_idx" ON "pages_blocks_deliverables_preview_pricing" USING btree ("_path");
  CREATE INDEX "pages_blocks_deliverables_preview_pricing_locale_idx" ON "pages_blocks_deliverables_preview_pricing" USING btree ("_locale");
  CREATE INDEX "pages_blocks_price_explanation_pricing_points_order_idx" ON "pages_blocks_price_explanation_pricing_points" USING btree ("_order");
  CREATE INDEX "pages_blocks_price_explanation_pricing_points_parent_id_idx" ON "pages_blocks_price_explanation_pricing_points" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_price_explanation_pricing_points_locale_idx" ON "pages_blocks_price_explanation_pricing_points" USING btree ("_locale");
  CREATE INDEX "pages_blocks_price_explanation_pricing_order_idx" ON "pages_blocks_price_explanation_pricing" USING btree ("_order");
  CREATE INDEX "pages_blocks_price_explanation_pricing_parent_id_idx" ON "pages_blocks_price_explanation_pricing" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_price_explanation_pricing_path_idx" ON "pages_blocks_price_explanation_pricing" USING btree ("_path");
  CREATE INDEX "pages_blocks_price_explanation_pricing_locale_idx" ON "pages_blocks_price_explanation_pricing" USING btree ("_locale");
  CREATE INDEX "pages_blocks_no_call_cta_pricing_steps_order_idx" ON "pages_blocks_no_call_cta_pricing_steps" USING btree ("_order");
  CREATE INDEX "pages_blocks_no_call_cta_pricing_steps_parent_id_idx" ON "pages_blocks_no_call_cta_pricing_steps" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_no_call_cta_pricing_steps_locale_idx" ON "pages_blocks_no_call_cta_pricing_steps" USING btree ("_locale");
  CREATE INDEX "pages_blocks_no_call_cta_pricing_order_idx" ON "pages_blocks_no_call_cta_pricing" USING btree ("_order");
  CREATE INDEX "pages_blocks_no_call_cta_pricing_parent_id_idx" ON "pages_blocks_no_call_cta_pricing" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_no_call_cta_pricing_path_idx" ON "pages_blocks_no_call_cta_pricing" USING btree ("_path");
  CREATE INDEX "pages_blocks_no_call_cta_pricing_locale_idx" ON "pages_blocks_no_call_cta_pricing" USING btree ("_locale");
  CREATE INDEX "pages_blocks_faq_pricing_items_order_idx" ON "pages_blocks_faq_pricing_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq_pricing_items_parent_id_idx" ON "pages_blocks_faq_pricing_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_pricing_items_locale_idx" ON "pages_blocks_faq_pricing_items" USING btree ("_locale");
  CREATE INDEX "pages_blocks_faq_pricing_order_idx" ON "pages_blocks_faq_pricing" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq_pricing_parent_id_idx" ON "pages_blocks_faq_pricing" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_pricing_path_idx" ON "pages_blocks_faq_pricing" USING btree ("_path");
  CREATE INDEX "pages_blocks_faq_pricing_locale_idx" ON "pages_blocks_faq_pricing" USING btree ("_locale");
  CREATE INDEX "pages_blocks_final_cta_pricing_order_idx" ON "pages_blocks_final_cta_pricing" USING btree ("_order");
  CREATE INDEX "pages_blocks_final_cta_pricing_parent_id_idx" ON "pages_blocks_final_cta_pricing" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_final_cta_pricing_path_idx" ON "pages_blocks_final_cta_pricing" USING btree ("_path");
  CREATE INDEX "pages_blocks_final_cta_pricing_locale_idx" ON "pages_blocks_final_cta_pricing" USING btree ("_locale");
  CREATE INDEX "pages_blocks_hero_method_order_idx" ON "pages_blocks_hero_method" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_method_parent_id_idx" ON "pages_blocks_hero_method" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_method_path_idx" ON "pages_blocks_hero_method" USING btree ("_path");
  CREATE INDEX "pages_blocks_hero_method_locale_idx" ON "pages_blocks_hero_method" USING btree ("_locale");
  CREATE INDEX "pages_blocks_steps_method_steps_order_idx" ON "pages_blocks_steps_method_steps" USING btree ("_order");
  CREATE INDEX "pages_blocks_steps_method_steps_parent_id_idx" ON "pages_blocks_steps_method_steps" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_steps_method_steps_locale_idx" ON "pages_blocks_steps_method_steps" USING btree ("_locale");
  CREATE INDEX "pages_blocks_steps_method_order_idx" ON "pages_blocks_steps_method" USING btree ("_order");
  CREATE INDEX "pages_blocks_steps_method_parent_id_idx" ON "pages_blocks_steps_method" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_steps_method_path_idx" ON "pages_blocks_steps_method" USING btree ("_path");
  CREATE INDEX "pages_blocks_steps_method_locale_idx" ON "pages_blocks_steps_method" USING btree ("_locale");
  CREATE INDEX "pages_blocks_deliverables_method_items_order_idx" ON "pages_blocks_deliverables_method_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_deliverables_method_items_parent_id_idx" ON "pages_blocks_deliverables_method_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_deliverables_method_items_locale_idx" ON "pages_blocks_deliverables_method_items" USING btree ("_locale");
  CREATE INDEX "pages_blocks_deliverables_method_order_idx" ON "pages_blocks_deliverables_method" USING btree ("_order");
  CREATE INDEX "pages_blocks_deliverables_method_parent_id_idx" ON "pages_blocks_deliverables_method" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_deliverables_method_path_idx" ON "pages_blocks_deliverables_method" USING btree ("_path");
  CREATE INDEX "pages_blocks_deliverables_method_locale_idx" ON "pages_blocks_deliverables_method" USING btree ("_locale");
  CREATE INDEX "pages_blocks_cta_method_order_idx" ON "pages_blocks_cta_method" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta_method_parent_id_idx" ON "pages_blocks_cta_method" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta_method_path_idx" ON "pages_blocks_cta_method" USING btree ("_path");
  CREATE INDEX "pages_blocks_cta_method_locale_idx" ON "pages_blocks_cta_method" USING btree ("_locale");
  CREATE INDEX "pages_blocks_hero_proposal_reassurance_items_order_idx" ON "pages_blocks_hero_proposal_reassurance_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_proposal_reassurance_items_parent_id_idx" ON "pages_blocks_hero_proposal_reassurance_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_proposal_reassurance_items_locale_idx" ON "pages_blocks_hero_proposal_reassurance_items" USING btree ("_locale");
  CREATE INDEX "pages_blocks_hero_proposal_order_idx" ON "pages_blocks_hero_proposal" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_proposal_parent_id_idx" ON "pages_blocks_hero_proposal" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_proposal_path_idx" ON "pages_blocks_hero_proposal" USING btree ("_path");
  CREATE INDEX "pages_blocks_hero_proposal_locale_idx" ON "pages_blocks_hero_proposal" USING btree ("_locale");
  CREATE INDEX "pages_blocks_trust_proposal_items_order_idx" ON "pages_blocks_trust_proposal_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_trust_proposal_items_parent_id_idx" ON "pages_blocks_trust_proposal_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_trust_proposal_items_locale_idx" ON "pages_blocks_trust_proposal_items" USING btree ("_locale");
  CREATE INDEX "pages_blocks_trust_proposal_support_points_order_idx" ON "pages_blocks_trust_proposal_support_points" USING btree ("_order");
  CREATE INDEX "pages_blocks_trust_proposal_support_points_parent_id_idx" ON "pages_blocks_trust_proposal_support_points" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_trust_proposal_support_points_locale_idx" ON "pages_blocks_trust_proposal_support_points" USING btree ("_locale");
  CREATE INDEX "pages_blocks_trust_proposal_order_idx" ON "pages_blocks_trust_proposal" USING btree ("_order");
  CREATE INDEX "pages_blocks_trust_proposal_parent_id_idx" ON "pages_blocks_trust_proposal" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_trust_proposal_path_idx" ON "pages_blocks_trust_proposal" USING btree ("_path");
  CREATE INDEX "pages_blocks_trust_proposal_locale_idx" ON "pages_blocks_trust_proposal" USING btree ("_locale");
  CREATE INDEX "pages_blocks_faq_proposal_items_order_idx" ON "pages_blocks_faq_proposal_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq_proposal_items_parent_id_idx" ON "pages_blocks_faq_proposal_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_proposal_items_locale_idx" ON "pages_blocks_faq_proposal_items" USING btree ("_locale");
  CREATE INDEX "pages_blocks_faq_proposal_order_idx" ON "pages_blocks_faq_proposal" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq_proposal_parent_id_idx" ON "pages_blocks_faq_proposal" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_proposal_path_idx" ON "pages_blocks_faq_proposal" USING btree ("_path");
  CREATE INDEX "pages_blocks_faq_proposal_locale_idx" ON "pages_blocks_faq_proposal" USING btree ("_locale");
  CREATE INDEX "pages_blocks_proposal_flow_proposal_intro_copy_order_idx" ON "pages_blocks_proposal_flow_proposal_intro_copy" USING btree ("_order");
  CREATE INDEX "pages_blocks_proposal_flow_proposal_intro_copy_parent_id_idx" ON "pages_blocks_proposal_flow_proposal_intro_copy" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_proposal_flow_proposal_intro_copy_locale_idx" ON "pages_blocks_proposal_flow_proposal_intro_copy" USING btree ("_locale");
  CREATE INDEX "pages_blocks_proposal_flow_proposal_intro_process_steps_order_idx" ON "pages_blocks_proposal_flow_proposal_intro_process_steps" USING btree ("_order");
  CREATE INDEX "pages_blocks_proposal_flow_proposal_intro_process_steps_parent_id_idx" ON "pages_blocks_proposal_flow_proposal_intro_process_steps" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_proposal_flow_proposal_intro_process_steps_locale_idx" ON "pages_blocks_proposal_flow_proposal_intro_process_steps" USING btree ("_locale");
  CREATE INDEX "pages_blocks_proposal_flow_proposal_wizard_copy_order_idx" ON "pages_blocks_proposal_flow_proposal_wizard_copy" USING btree ("_order");
  CREATE INDEX "pages_blocks_proposal_flow_proposal_wizard_copy_parent_id_idx" ON "pages_blocks_proposal_flow_proposal_wizard_copy" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_proposal_flow_proposal_wizard_copy_locale_idx" ON "pages_blocks_proposal_flow_proposal_wizard_copy" USING btree ("_locale");
  CREATE INDEX "pages_blocks_proposal_flow_proposal_wizard_step_labels_order_idx" ON "pages_blocks_proposal_flow_proposal_wizard_step_labels" USING btree ("_order");
  CREATE INDEX "pages_blocks_proposal_flow_proposal_wizard_step_labels_parent_id_idx" ON "pages_blocks_proposal_flow_proposal_wizard_step_labels" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_proposal_flow_proposal_wizard_step_labels_locale_idx" ON "pages_blocks_proposal_flow_proposal_wizard_step_labels" USING btree ("_locale");
  CREATE INDEX "pages_blocks_proposal_flow_proposal_project_types_order_idx" ON "pages_blocks_proposal_flow_proposal_project_types" USING btree ("_order");
  CREATE INDEX "pages_blocks_proposal_flow_proposal_project_types_parent_id_idx" ON "pages_blocks_proposal_flow_proposal_project_types" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_proposal_flow_proposal_project_types_locale_idx" ON "pages_blocks_proposal_flow_proposal_project_types" USING btree ("_locale");
  CREATE INDEX "pages_blocks_proposal_flow_proposal_project_goals_order_idx" ON "pages_blocks_proposal_flow_proposal_project_goals" USING btree ("_order");
  CREATE INDEX "pages_blocks_proposal_flow_proposal_project_goals_parent_id_idx" ON "pages_blocks_proposal_flow_proposal_project_goals" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_proposal_flow_proposal_project_goals_locale_idx" ON "pages_blocks_proposal_flow_proposal_project_goals" USING btree ("_locale");
  CREATE INDEX "pages_blocks_proposal_flow_proposal_team_types_order_idx" ON "pages_blocks_proposal_flow_proposal_team_types" USING btree ("_order");
  CREATE INDEX "pages_blocks_proposal_flow_proposal_team_types_parent_id_idx" ON "pages_blocks_proposal_flow_proposal_team_types" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_proposal_flow_proposal_team_types_locale_idx" ON "pages_blocks_proposal_flow_proposal_team_types" USING btree ("_locale");
  CREATE INDEX "pages_blocks_proposal_flow_proposal_complexity_flags_order_idx" ON "pages_blocks_proposal_flow_proposal_complexity_flags" USING btree ("_order");
  CREATE INDEX "pages_blocks_proposal_flow_proposal_complexity_flags_parent_id_idx" ON "pages_blocks_proposal_flow_proposal_complexity_flags" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_proposal_flow_proposal_complexity_flags_locale_idx" ON "pages_blocks_proposal_flow_proposal_complexity_flags" USING btree ("_locale");
  CREATE INDEX "pages_blocks_proposal_flow_proposal_materials_options_order_idx" ON "pages_blocks_proposal_flow_proposal_materials_options" USING btree ("_order");
  CREATE INDEX "pages_blocks_proposal_flow_proposal_materials_options_parent_id_idx" ON "pages_blocks_proposal_flow_proposal_materials_options" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_proposal_flow_proposal_materials_options_locale_idx" ON "pages_blocks_proposal_flow_proposal_materials_options" USING btree ("_locale");
  CREATE INDEX "pages_blocks_proposal_flow_proposal_timeline_options_order_idx" ON "pages_blocks_proposal_flow_proposal_timeline_options" USING btree ("_order");
  CREATE INDEX "pages_blocks_proposal_flow_proposal_timeline_options_parent_id_idx" ON "pages_blocks_proposal_flow_proposal_timeline_options" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_proposal_flow_proposal_timeline_options_locale_idx" ON "pages_blocks_proposal_flow_proposal_timeline_options" USING btree ("_locale");
  CREATE INDEX "pages_blocks_proposal_flow_proposal_budget_options_order_idx" ON "pages_blocks_proposal_flow_proposal_budget_options" USING btree ("_order");
  CREATE INDEX "pages_blocks_proposal_flow_proposal_budget_options_parent_id_idx" ON "pages_blocks_proposal_flow_proposal_budget_options" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_proposal_flow_proposal_budget_options_locale_idx" ON "pages_blocks_proposal_flow_proposal_budget_options" USING btree ("_locale");
  CREATE INDEX "pages_blocks_proposal_flow_proposal_summary_results_order_idx" ON "pages_blocks_proposal_flow_proposal_summary_results" USING btree ("_order");
  CREATE INDEX "pages_blocks_proposal_flow_proposal_summary_results_parent_id_idx" ON "pages_blocks_proposal_flow_proposal_summary_results" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_proposal_flow_proposal_summary_results_locale_idx" ON "pages_blocks_proposal_flow_proposal_summary_results" USING btree ("_locale");
  CREATE INDEX "pages_blocks_proposal_flow_proposal_upload_copy_order_idx" ON "pages_blocks_proposal_flow_proposal_upload_copy" USING btree ("_order");
  CREATE INDEX "pages_blocks_proposal_flow_proposal_upload_copy_parent_id_idx" ON "pages_blocks_proposal_flow_proposal_upload_copy" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_proposal_flow_proposal_upload_copy_locale_idx" ON "pages_blocks_proposal_flow_proposal_upload_copy" USING btree ("_locale");
  CREATE INDEX "pages_blocks_proposal_flow_proposal_success_copy_order_idx" ON "pages_blocks_proposal_flow_proposal_success_copy" USING btree ("_order");
  CREATE INDEX "pages_blocks_proposal_flow_proposal_success_copy_parent_id_idx" ON "pages_blocks_proposal_flow_proposal_success_copy" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_proposal_flow_proposal_success_copy_locale_idx" ON "pages_blocks_proposal_flow_proposal_success_copy" USING btree ("_locale");
  CREATE INDEX "pages_blocks_proposal_flow_proposal_success_steps_order_idx" ON "pages_blocks_proposal_flow_proposal_success_steps" USING btree ("_order");
  CREATE INDEX "pages_blocks_proposal_flow_proposal_success_steps_parent_id_idx" ON "pages_blocks_proposal_flow_proposal_success_steps" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_proposal_flow_proposal_success_steps_locale_idx" ON "pages_blocks_proposal_flow_proposal_success_steps" USING btree ("_locale");
  CREATE INDEX "pages_blocks_proposal_flow_proposal_order_idx" ON "pages_blocks_proposal_flow_proposal" USING btree ("_order");
  CREATE INDEX "pages_blocks_proposal_flow_proposal_parent_id_idx" ON "pages_blocks_proposal_flow_proposal" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_proposal_flow_proposal_path_idx" ON "pages_blocks_proposal_flow_proposal" USING btree ("_path");
  CREATE INDEX "pages_blocks_proposal_flow_proposal_locale_idx" ON "pages_blocks_proposal_flow_proposal" USING btree ("_locale");
  CREATE INDEX "pages_blocks_final_support_proposal_order_idx" ON "pages_blocks_final_support_proposal" USING btree ("_order");
  CREATE INDEX "pages_blocks_final_support_proposal_parent_id_idx" ON "pages_blocks_final_support_proposal" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_final_support_proposal_path_idx" ON "pages_blocks_final_support_proposal" USING btree ("_path");
  CREATE INDEX "pages_blocks_final_support_proposal_locale_idx" ON "pages_blocks_final_support_proposal" USING btree ("_locale");
  CREATE INDEX "pages_blocks_hero_concepts_tags_order_idx" ON "pages_blocks_hero_concepts_tags" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_concepts_tags_parent_id_idx" ON "pages_blocks_hero_concepts_tags" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_concepts_tags_locale_idx" ON "pages_blocks_hero_concepts_tags" USING btree ("_locale");
  CREATE INDEX "pages_blocks_hero_concepts_order_idx" ON "pages_blocks_hero_concepts" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_concepts_parent_id_idx" ON "pages_blocks_hero_concepts" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_concepts_path_idx" ON "pages_blocks_hero_concepts" USING btree ("_path");
  CREATE INDEX "pages_blocks_hero_concepts_locale_idx" ON "pages_blocks_hero_concepts" USING btree ("_locale");
  CREATE INDEX "pages_blocks_intro_concepts_pillars_order_idx" ON "pages_blocks_intro_concepts_pillars" USING btree ("_order");
  CREATE INDEX "pages_blocks_intro_concepts_pillars_parent_id_idx" ON "pages_blocks_intro_concepts_pillars" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_intro_concepts_pillars_locale_idx" ON "pages_blocks_intro_concepts_pillars" USING btree ("_locale");
  CREATE INDEX "pages_blocks_intro_concepts_order_idx" ON "pages_blocks_intro_concepts" USING btree ("_order");
  CREATE INDEX "pages_blocks_intro_concepts_parent_id_idx" ON "pages_blocks_intro_concepts" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_intro_concepts_path_idx" ON "pages_blocks_intro_concepts" USING btree ("_path");
  CREATE INDEX "pages_blocks_intro_concepts_locale_idx" ON "pages_blocks_intro_concepts" USING btree ("_locale");
  CREATE INDEX "pages_blocks_nav_concepts_items_order_idx" ON "pages_blocks_nav_concepts_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_nav_concepts_items_parent_id_idx" ON "pages_blocks_nav_concepts_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_nav_concepts_items_locale_idx" ON "pages_blocks_nav_concepts_items" USING btree ("_locale");
  CREATE INDEX "pages_blocks_nav_concepts_order_idx" ON "pages_blocks_nav_concepts" USING btree ("_order");
  CREATE INDEX "pages_blocks_nav_concepts_parent_id_idx" ON "pages_blocks_nav_concepts" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_nav_concepts_path_idx" ON "pages_blocks_nav_concepts" USING btree ("_path");
  CREATE INDEX "pages_blocks_nav_concepts_locale_idx" ON "pages_blocks_nav_concepts" USING btree ("_locale");
  CREATE INDEX "pages_blocks_concept_section_concept_order_idx" ON "pages_blocks_concept_section_concept" USING btree ("_order");
  CREATE INDEX "pages_blocks_concept_section_concept_parent_id_idx" ON "pages_blocks_concept_section_concept" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_concept_section_concept_path_idx" ON "pages_blocks_concept_section_concept" USING btree ("_path");
  CREATE INDEX "pages_blocks_concept_section_concept_locale_idx" ON "pages_blocks_concept_section_concept" USING btree ("_locale");
  CREATE INDEX "pages_blocks_why_concepts_items_order_idx" ON "pages_blocks_why_concepts_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_why_concepts_items_parent_id_idx" ON "pages_blocks_why_concepts_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_why_concepts_items_locale_idx" ON "pages_blocks_why_concepts_items" USING btree ("_locale");
  CREATE INDEX "pages_blocks_why_concepts_order_idx" ON "pages_blocks_why_concepts" USING btree ("_order");
  CREATE INDEX "pages_blocks_why_concepts_parent_id_idx" ON "pages_blocks_why_concepts" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_why_concepts_path_idx" ON "pages_blocks_why_concepts" USING btree ("_path");
  CREATE INDEX "pages_blocks_why_concepts_locale_idx" ON "pages_blocks_why_concepts" USING btree ("_locale");
  CREATE INDEX "pages_blocks_cta_concepts_order_idx" ON "pages_blocks_cta_concepts" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta_concepts_parent_id_idx" ON "pages_blocks_cta_concepts" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta_concepts_path_idx" ON "pages_blocks_cta_concepts" USING btree ("_path");
  CREATE INDEX "pages_blocks_cta_concepts_locale_idx" ON "pages_blocks_cta_concepts" USING btree ("_locale");
  CREATE UNIQUE INDEX "pages_page_key_idx" ON "pages" USING btree ("page_key");
  CREATE INDEX "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE UNIQUE INDEX "pages_locales_locale_parent_id_unique" ON "pages_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "proposal_files_request_idx" ON "proposal_files" USING btree ("request_id");
  CREATE INDEX "proposal_files_updated_at_idx" ON "proposal_files" USING btree ("updated_at");
  CREATE INDEX "proposal_files_created_at_idx" ON "proposal_files" USING btree ("created_at");
  CREATE UNIQUE INDEX "proposal_files_filename_idx" ON "proposal_files" USING btree ("filename");
  CREATE INDEX "proposal_requests_links_order_idx" ON "proposal_requests_links" USING btree ("_order");
  CREATE INDEX "proposal_requests_links_parent_id_idx" ON "proposal_requests_links" USING btree ("_parent_id");
  CREATE INDEX "proposal_requests_updated_at_idx" ON "proposal_requests" USING btree ("updated_at");
  CREATE INDEX "proposal_requests_created_at_idx" ON "proposal_requests" USING btree ("created_at");
  CREATE INDEX "proposal_requests_rels_order_idx" ON "proposal_requests_rels" USING btree ("order");
  CREATE INDEX "proposal_requests_rels_parent_idx" ON "proposal_requests_rels" USING btree ("parent_id");
  CREATE INDEX "proposal_requests_rels_path_idx" ON "proposal_requests_rels" USING btree ("path");
  CREATE INDEX "proposal_requests_rels_proposal_files_id_idx" ON "proposal_requests_rels" USING btree ("proposal_files_id");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");
  CREATE INDEX "payload_locked_documents_rels_proposal_files_id_idx" ON "payload_locked_documents_rels" USING btree ("proposal_files_id");
  CREATE INDEX "payload_locked_documents_rels_proposal_requests_id_idx" ON "payload_locked_documents_rels" USING btree ("proposal_requests_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "header_navigation_order_idx" ON "header_navigation" USING btree ("_order");
  CREATE INDEX "header_navigation_parent_id_idx" ON "header_navigation" USING btree ("_parent_id");
  CREATE INDEX "header_navigation_locale_idx" ON "header_navigation" USING btree ("_locale");
  CREATE UNIQUE INDEX "header_locales_locale_parent_id_unique" ON "header_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "footer_columns_links_order_idx" ON "footer_columns_links" USING btree ("_order");
  CREATE INDEX "footer_columns_links_parent_id_idx" ON "footer_columns_links" USING btree ("_parent_id");
  CREATE INDEX "footer_columns_links_locale_idx" ON "footer_columns_links" USING btree ("_locale");
  CREATE INDEX "footer_columns_order_idx" ON "footer_columns" USING btree ("_order");
  CREATE INDEX "footer_columns_parent_id_idx" ON "footer_columns" USING btree ("_parent_id");
  CREATE INDEX "footer_columns_locale_idx" ON "footer_columns" USING btree ("_locale");
  CREATE INDEX "footer_bottom_links_order_idx" ON "footer_bottom_links" USING btree ("_order");
  CREATE INDEX "footer_bottom_links_parent_id_idx" ON "footer_bottom_links" USING btree ("_parent_id");
  CREATE INDEX "footer_bottom_links_locale_idx" ON "footer_bottom_links" USING btree ("_locale");
  CREATE UNIQUE INDEX "footer_locales_locale_parent_id_unique" ON "footer_locales" USING btree ("_locale","_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "pages_blocks_hero_title_rows_segments" CASCADE;
  DROP TABLE "pages_blocks_hero_title_rows" CASCADE;
  DROP TABLE "pages_blocks_hero_tags" CASCADE;
  DROP TABLE "pages_blocks_hero" CASCADE;
  DROP TABLE "pages_blocks_value_home_items" CASCADE;
  DROP TABLE "pages_blocks_value_home" CASCADE;
  DROP TABLE "pages_blocks_video_walkthrough_home_meta_badges" CASCADE;
  DROP TABLE "pages_blocks_video_walkthrough_home_timeline" CASCADE;
  DROP TABLE "pages_blocks_video_walkthrough_home_highlights" CASCADE;
  DROP TABLE "pages_blocks_video_walkthrough_home" CASCADE;
  DROP TABLE "pages_blocks_deliverables_home_items" CASCADE;
  DROP TABLE "pages_blocks_deliverables_home" CASCADE;
  DROP TABLE "pages_blocks_why_home_items" CASCADE;
  DROP TABLE "pages_blocks_why_home" CASCADE;
  DROP TABLE "pages_blocks_audience_home_items" CASCADE;
  DROP TABLE "pages_blocks_audience_home" CASCADE;
  DROP TABLE "pages_blocks_concepts_home_items" CASCADE;
  DROP TABLE "pages_blocks_concepts_home" CASCADE;
  DROP TABLE "pages_blocks_method_home_items_details" CASCADE;
  DROP TABLE "pages_blocks_method_home_items" CASCADE;
  DROP TABLE "pages_blocks_method_home" CASCADE;
  DROP TABLE "pages_blocks_pricing_home_items_includes" CASCADE;
  DROP TABLE "pages_blocks_pricing_home_items" CASCADE;
  DROP TABLE "pages_blocks_pricing_home" CASCADE;
  DROP TABLE "pages_blocks_proposal_home_steps" CASCADE;
  DROP TABLE "pages_blocks_proposal_home" CASCADE;
  DROP TABLE "pages_blocks_sample_preview_home_items" CASCADE;
  DROP TABLE "pages_blocks_sample_preview_home" CASCADE;
  DROP TABLE "pages_blocks_trust_home_items" CASCADE;
  DROP TABLE "pages_blocks_trust_home" CASCADE;
  DROP TABLE "pages_blocks_faq_home_items" CASCADE;
  DROP TABLE "pages_blocks_faq_home" CASCADE;
  DROP TABLE "pages_blocks_final_cta_home" CASCADE;
  DROP TABLE "pages_blocks_hero_solutions_tags" CASCADE;
  DROP TABLE "pages_blocks_hero_solutions" CASCADE;
  DROP TABLE "pages_blocks_positioning_intro_solutions_items" CASCADE;
  DROP TABLE "pages_blocks_positioning_intro_solutions" CASCADE;
  DROP TABLE "pages_blocks_grid_solutions_items" CASCADE;
  DROP TABLE "pages_blocks_grid_solutions" CASCADE;
  DROP TABLE "pages_blocks_details_solution_items_when_relevant" CASCADE;
  DROP TABLE "pages_blocks_details_solution_items_what_we_clarify" CASCADE;
  DROP TABLE "pages_blocks_details_solution_items_what_client_receives" CASCADE;
  DROP TABLE "pages_blocks_details_solution_items" CASCADE;
  DROP TABLE "pages_blocks_details_solution" CASCADE;
  DROP TABLE "pages_blocks_client_artifacts_solutions_items" CASCADE;
  DROP TABLE "pages_blocks_client_artifacts_solutions" CASCADE;
  DROP TABLE "pages_blocks_audience_solutions_items" CASCADE;
  DROP TABLE "pages_blocks_audience_solutions" CASCADE;
  DROP TABLE "pages_blocks_why_solutions_items" CASCADE;
  DROP TABLE "pages_blocks_why_solutions" CASCADE;
  DROP TABLE "pages_blocks_connected_cta_solutions" CASCADE;
  DROP TABLE "pages_blocks_faq_solutions_items" CASCADE;
  DROP TABLE "pages_blocks_faq_solutions" CASCADE;
  DROP TABLE "pages_blocks_hero_startups_tags" CASCADE;
  DROP TABLE "pages_blocks_hero_startups" CASCADE;
  DROP TABLE "pages_blocks_value_startups_items" CASCADE;
  DROP TABLE "pages_blocks_value_startups" CASCADE;
  DROP TABLE "pages_blocks_deliverables_startups_items" CASCADE;
  DROP TABLE "pages_blocks_deliverables_startups" CASCADE;
  DROP TABLE "pages_blocks_situations_startups_items" CASCADE;
  DROP TABLE "pages_blocks_situations_startups" CASCADE;
  DROP TABLE "pages_blocks_artifacts_startups_items" CASCADE;
  DROP TABLE "pages_blocks_artifacts_startups" CASCADE;
  DROP TABLE "pages_blocks_process_startups_steps" CASCADE;
  DROP TABLE "pages_blocks_process_startups" CASCADE;
  DROP TABLE "pages_blocks_efficiency_startups_items" CASCADE;
  DROP TABLE "pages_blocks_efficiency_startups" CASCADE;
  DROP TABLE "pages_blocks_concepts_startups_items" CASCADE;
  DROP TABLE "pages_blocks_concepts_startups" CASCADE;
  DROP TABLE "pages_blocks_cta_startups" CASCADE;
  DROP TABLE "pages_blocks_faq_startups_items" CASCADE;
  DROP TABLE "pages_blocks_faq_startups" CASCADE;
  DROP TABLE "pages_blocks_hero_agencies_partner_tags" CASCADE;
  DROP TABLE "pages_blocks_hero_agencies" CASCADE;
  DROP TABLE "pages_blocks_partners_clarification_agencies_pillars" CASCADE;
  DROP TABLE "pages_blocks_partners_clarification_agencies" CASCADE;
  DROP TABLE "pages_blocks_audience_agencies_items" CASCADE;
  DROP TABLE "pages_blocks_audience_agencies" CASCADE;
  DROP TABLE "pages_blocks_value_agencies_items" CASCADE;
  DROP TABLE "pages_blocks_value_agencies" CASCADE;
  DROP TABLE "pages_blocks_projects_agencies_items" CASCADE;
  DROP TABLE "pages_blocks_projects_agencies" CASCADE;
  DROP TABLE "pages_blocks_process_agencies_steps" CASCADE;
  DROP TABLE "pages_blocks_process_agencies_markers" CASCADE;
  DROP TABLE "pages_blocks_process_agencies" CASCADE;
  DROP TABLE "pages_blocks_artifacts_agencies_items" CASCADE;
  DROP TABLE "pages_blocks_artifacts_agencies" CASCADE;
  DROP TABLE "pages_blocks_why_agencies_items" CASCADE;
  DROP TABLE "pages_blocks_why_agencies" CASCADE;
  DROP TABLE "pages_blocks_concepts_agencies_items" CASCADE;
  DROP TABLE "pages_blocks_concepts_agencies" CASCADE;
  DROP TABLE "pages_blocks_cta_agencies" CASCADE;
  DROP TABLE "pages_blocks_faq_agencies_items" CASCADE;
  DROP TABLE "pages_blocks_faq_agencies" CASCADE;
  DROP TABLE "pages_blocks_hero_pricing_trust_labels" CASCADE;
  DROP TABLE "pages_blocks_hero_pricing" CASCADE;
  DROP TABLE "pages_blocks_positioning_block_pricing_pillars" CASCADE;
  DROP TABLE "pages_blocks_positioning_block_pricing_delivery_elements" CASCADE;
  DROP TABLE "pages_blocks_positioning_block_pricing" CASCADE;
  DROP TABLE "pages_blocks_package_cards_pricing_packages_includes" CASCADE;
  DROP TABLE "pages_blocks_package_cards_pricing_packages" CASCADE;
  DROP TABLE "pages_blocks_package_cards_pricing" CASCADE;
  DROP TABLE "pages_blocks_choosing_guide_pricing_items" CASCADE;
  DROP TABLE "pages_blocks_choosing_guide_pricing" CASCADE;
  DROP TABLE "pages_blocks_deliverables_preview_pricing_items" CASCADE;
  DROP TABLE "pages_blocks_deliverables_preview_pricing" CASCADE;
  DROP TABLE "pages_blocks_price_explanation_pricing_points" CASCADE;
  DROP TABLE "pages_blocks_price_explanation_pricing" CASCADE;
  DROP TABLE "pages_blocks_no_call_cta_pricing_steps" CASCADE;
  DROP TABLE "pages_blocks_no_call_cta_pricing" CASCADE;
  DROP TABLE "pages_blocks_faq_pricing_items" CASCADE;
  DROP TABLE "pages_blocks_faq_pricing" CASCADE;
  DROP TABLE "pages_blocks_final_cta_pricing" CASCADE;
  DROP TABLE "pages_blocks_hero_method" CASCADE;
  DROP TABLE "pages_blocks_steps_method_steps" CASCADE;
  DROP TABLE "pages_blocks_steps_method" CASCADE;
  DROP TABLE "pages_blocks_deliverables_method_items" CASCADE;
  DROP TABLE "pages_blocks_deliverables_method" CASCADE;
  DROP TABLE "pages_blocks_cta_method" CASCADE;
  DROP TABLE "pages_blocks_hero_proposal_reassurance_items" CASCADE;
  DROP TABLE "pages_blocks_hero_proposal" CASCADE;
  DROP TABLE "pages_blocks_trust_proposal_items" CASCADE;
  DROP TABLE "pages_blocks_trust_proposal_support_points" CASCADE;
  DROP TABLE "pages_blocks_trust_proposal" CASCADE;
  DROP TABLE "pages_blocks_faq_proposal_items" CASCADE;
  DROP TABLE "pages_blocks_faq_proposal" CASCADE;
  DROP TABLE "pages_blocks_proposal_flow_proposal_intro_copy" CASCADE;
  DROP TABLE "pages_blocks_proposal_flow_proposal_intro_process_steps" CASCADE;
  DROP TABLE "pages_blocks_proposal_flow_proposal_wizard_copy" CASCADE;
  DROP TABLE "pages_blocks_proposal_flow_proposal_wizard_step_labels" CASCADE;
  DROP TABLE "pages_blocks_proposal_flow_proposal_project_types" CASCADE;
  DROP TABLE "pages_blocks_proposal_flow_proposal_project_goals" CASCADE;
  DROP TABLE "pages_blocks_proposal_flow_proposal_team_types" CASCADE;
  DROP TABLE "pages_blocks_proposal_flow_proposal_complexity_flags" CASCADE;
  DROP TABLE "pages_blocks_proposal_flow_proposal_materials_options" CASCADE;
  DROP TABLE "pages_blocks_proposal_flow_proposal_timeline_options" CASCADE;
  DROP TABLE "pages_blocks_proposal_flow_proposal_budget_options" CASCADE;
  DROP TABLE "pages_blocks_proposal_flow_proposal_summary_results" CASCADE;
  DROP TABLE "pages_blocks_proposal_flow_proposal_upload_copy" CASCADE;
  DROP TABLE "pages_blocks_proposal_flow_proposal_success_copy" CASCADE;
  DROP TABLE "pages_blocks_proposal_flow_proposal_success_steps" CASCADE;
  DROP TABLE "pages_blocks_proposal_flow_proposal" CASCADE;
  DROP TABLE "pages_blocks_final_support_proposal" CASCADE;
  DROP TABLE "pages_blocks_hero_concepts_tags" CASCADE;
  DROP TABLE "pages_blocks_hero_concepts" CASCADE;
  DROP TABLE "pages_blocks_intro_concepts_pillars" CASCADE;
  DROP TABLE "pages_blocks_intro_concepts" CASCADE;
  DROP TABLE "pages_blocks_nav_concepts_items" CASCADE;
  DROP TABLE "pages_blocks_nav_concepts" CASCADE;
  DROP TABLE "pages_blocks_concept_section_concept" CASCADE;
  DROP TABLE "pages_blocks_why_concepts_items" CASCADE;
  DROP TABLE "pages_blocks_why_concepts" CASCADE;
  DROP TABLE "pages_blocks_cta_concepts" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "pages_locales" CASCADE;
  DROP TABLE "proposal_files" CASCADE;
  DROP TABLE "proposal_requests_links" CASCADE;
  DROP TABLE "proposal_requests" CASCADE;
  DROP TABLE "proposal_requests_rels" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "header_navigation" CASCADE;
  DROP TABLE "header" CASCADE;
  DROP TABLE "header_locales" CASCADE;
  DROP TABLE "footer_columns_links" CASCADE;
  DROP TABLE "footer_columns" CASCADE;
  DROP TABLE "footer_bottom_links" CASCADE;
  DROP TABLE "footer" CASCADE;
  DROP TABLE "footer_locales" CASCADE;
  DROP TYPE "public"."_locales";
  DROP TYPE "public"."enum_pages_blocks_hero_title_rows_segments_tone";
  DROP TYPE "public"."enum_pages_blocks_hero_primary_page_key";
  DROP TYPE "public"."enum_pages_blocks_hero_secondary_page_key";
  DROP TYPE "public"."enum_pages_blocks_value_home_items_variant";
  DROP TYPE "public"."enum_pages_blocks_value_home_items_icon";
  DROP TYPE "public"."enum_pages_blocks_video_walkthrough_home_primary_page_key";
  DROP TYPE "public"."enum_pages_blocks_video_walkthrough_home_secondary_page_key";
  DROP TYPE "public"."enum_pages_blocks_deliverables_home_items_icon";
  DROP TYPE "public"."enum_pages_blocks_audience_home_cta_page_key";
  DROP TYPE "public"."enum_pages_blocks_concepts_home_concepts_page_key";
  DROP TYPE "public"."enum_pages_blocks_pricing_home_cta_page_key";
  DROP TYPE "public"."enum_pages_blocks_proposal_home_steps_icon";
  DROP TYPE "public"."enum_pages_blocks_proposal_home_cta_page_key";
  DROP TYPE "public"."enum_pages_blocks_final_cta_home_primary_page_key";
  DROP TYPE "public"."enum_pages_blocks_final_cta_home_secondary_page_key";
  DROP TYPE "public"."enum_pages_blocks_hero_solutions_primary_page_key";
  DROP TYPE "public"."enum_pages_blocks_hero_solutions_secondary_page_key";
  DROP TYPE "public"."enum_pages_blocks_hero_solutions_image_source";
  DROP TYPE "public"."enum_pages_blocks_details_solution_items_primary_page_key";
  DROP TYPE "public"."enum_pages_blocks_details_solution_items_secondary_page_key";
  DROP TYPE "public"."enum_pages_blocks_audience_solutions_items_cta_page_key";
  DROP TYPE "public"."enum_pages_blocks_connected_cta_solutions_primary_page_key";
  DROP TYPE "public"."enum_pages_blocks_connected_cta_solutions_secondary_page_key";
  DROP TYPE "public"."enum_pages_blocks_hero_startups_primary_page_key";
  DROP TYPE "public"."enum_pages_blocks_hero_startups_secondary_page_key";
  DROP TYPE "public"."enum_pages_blocks_value_startups_items_icon";
  DROP TYPE "public"."enum_pages_blocks_value_startups_layout_variant";
  DROP TYPE "public"."enum_pages_blocks_deliverables_startups_layout_variant";
  DROP TYPE "public"."enum_pages_blocks_situations_startups_layout_variant";
  DROP TYPE "public"."enum_pages_blocks_situations_startups_cta_page_key";
  DROP TYPE "public"."enum_pages_blocks_artifacts_startups_items_icon";
  DROP TYPE "public"."enum_pages_blocks_efficiency_startups_items_icon";
  DROP TYPE "public"."enum_pages_blocks_concepts_startups_cta_page_key";
  DROP TYPE "public"."enum_pages_blocks_cta_startups_primary_page_key";
  DROP TYPE "public"."enum_pages_blocks_cta_startups_secondary_page_key";
  DROP TYPE "public"."enum_pages_blocks_hero_agencies_primary_page_key";
  DROP TYPE "public"."enum_pages_blocks_hero_agencies_secondary_page_key";
  DROP TYPE "public"."enum_pages_blocks_value_agencies_items_icon";
  DROP TYPE "public"."enum_pages_blocks_value_agencies_layout_variant";
  DROP TYPE "public"."enum_pages_blocks_projects_agencies_layout_variant";
  DROP TYPE "public"."enum_pages_blocks_process_agencies_layout_variant";
  DROP TYPE "public"."enum_pages_blocks_artifacts_agencies_items_icon";
  DROP TYPE "public"."enum_pages_blocks_why_agencies_layout_variant";
  DROP TYPE "public"."enum_pages_blocks_concepts_agencies_layout_variant";
  DROP TYPE "public"."enum_pages_blocks_concepts_agencies_view_all_page_key";
  DROP TYPE "public"."enum_pages_blocks_cta_agencies_primary_page_key";
  DROP TYPE "public"."enum_pages_blocks_cta_agencies_secondary_page_key";
  DROP TYPE "public"."hp_pri_pk";
  DROP TYPE "public"."hp_sec_pk";
  DROP TYPE "public"."pcp_pri_pk";
  DROP TYPE "public"."pcp_sec_pk";
  DROP TYPE "public"."cgp_pkg_key";
  DROP TYPE "public"."cgp_page_key";
  DROP TYPE "public"."dpp_vis";
  DROP TYPE "public"."dpp_layout_v";
  DROP TYPE "public"."dpp_top_pk";
  DROP TYPE "public"."dpp_ftr_pk";
  DROP TYPE "public"."nccp_pri_pk";
  DROP TYPE "public"."nccp_sec_pk";
  DROP TYPE "public"."fctp_pri_pk";
  DROP TYPE "public"."fctp_sec_pk";
  DROP TYPE "public"."hm_pri_pk";
  DROP TYPE "public"."hm_sec_pk";
  DROP TYPE "public"."sm_layout_v";
  DROP TYPE "public"."ctam_pri_pk";
  DROP TYPE "public"."ctam_sec_pk";
  DROP TYPE "public"."hppr_icon";
  DROP TYPE "public"."tp_icon";
  DROP TYPE "public"."pfp_ip_icon";
  DROP TYPE "public"."pfp_home_pk";
  DROP TYPE "public"."pfp_price_pk";
  DROP TYPE "public"."enum_pages_blocks_final_support_proposal_pricing_page_key";
  DROP TYPE "public"."hc_pri_pk";
  DROP TYPE "public"."hc_sec_pk";
  DROP TYPE "public"."ic_pillar_icon";
  DROP TYPE "public"."enum_pages_blocks_concept_section_concept_layout";
  DROP TYPE "public"."enum_pages_blocks_concept_section_concept_cta_page_key";
  DROP TYPE "public"."enum_pages_blocks_why_concepts_items_icon";
  DROP TYPE "public"."enum_pages_blocks_cta_concepts_primary_page_key";
  DROP TYPE "public"."enum_pages_blocks_cta_concepts_secondary_page_key";
  DROP TYPE "public"."enum_pages_route_type";
  DROP TYPE "public"."enum_pages_page_key";
  DROP TYPE "public"."enum_proposal_files_source_type";
  DROP TYPE "public"."enum_proposal_requests_mode";
  DROP TYPE "public"."enum_proposal_requests_locale";
  DROP TYPE "public"."enum_header_navigation_page_key";
  DROP TYPE "public"."enum_footer_columns_links_page_key";
  DROP TYPE "public"."enum_footer_columns_type";
  DROP TYPE "public"."enum_footer_columns_button_page_key";
  DROP TYPE "public"."enum_footer_bottom_links_page_key";
  DROP TYPE "public"."enum_footer_variant";`)
}
