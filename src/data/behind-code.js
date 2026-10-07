/** @type {import('@/types').BehindCode} */
const behindCode = {
  eyebrow: "Behind the Code",
  heading: "Thoughtful Flutter apps, from architecture to interface",
  paragraphs: [
    "I build cross-platform mobile applications with Flutter and Dart, grounded in software engineering studies at Mansoura University.",
    "My project and internship work brings together BLoC/Cubit or MVVM, Clean Architecture, and REST API integration.",
    "Working with Android and iOS products in collaborative teams, I focus on clear interfaces, maintainable structure, and practical delivery.",
  ],
  snippet: {
    fileName: "architecture_sketch.dart",
    language: "Dart · Pattern sketch",
    note: "Illustrative architecture pattern — not project source code.",
    lines: [
      {
        indent: 0,
        fragments: [
          { text: "import", tone: "keyword" },
          {
            text: " 'package:flutter_bloc/flutter_bloc.dart';",
            tone: "plain",
          },
        ],
      },
      { indent: 0, fragments: [] },
      {
        indent: 0,
        fragments: [
          { text: "abstract", tone: "keyword" },
          { text: " interface ", tone: "keyword" },
          { text: "Repository", tone: "type" },
          { text: " { ", tone: "plain" },
          { text: "Future", tone: "type" },
          { text: "<String> ", tone: "plain" },
          { text: "load", tone: "member" },
          { text: "(); }", tone: "plain" },
        ],
      },
      {
        indent: 0,
        fragments: [
          { text: "sealed", tone: "keyword" },
          { text: " class ", tone: "keyword" },
          { text: "FeatureState {}", tone: "type" },
        ],
      },
      {
        indent: 0,
        fragments: [
          { text: "final", tone: "keyword" },
          { text: " class ", tone: "keyword" },
          { text: "FeatureInitial", tone: "type" },
          { text: " extends FeatureState {}", tone: "plain" },
        ],
      },
      {
        indent: 0,
        fragments: [
          { text: "final", tone: "keyword" },
          { text: " class ", tone: "keyword" },
          { text: "FeatureLoading", tone: "type" },
          { text: " extends FeatureState {}", tone: "plain" },
        ],
      },
      {
        indent: 0,
        fragments: [
          { text: "final", tone: "keyword" },
          { text: " class ", tone: "keyword" },
          { text: "FeatureLoaded", tone: "type" },
          { text: " extends FeatureState {", tone: "plain" },
        ],
      },
      {
        indent: 1,
        fragments: [
          { text: "FeatureLoaded", tone: "type" },
          { text: "(this.value);", tone: "plain" },
        ],
      },
      {
        indent: 1,
        fragments: [
          { text: "final", tone: "keyword" },
          { text: " String value;", tone: "plain" },
        ],
      },
      { indent: 0, fragments: [{ text: "}", tone: "plain" }] },
      { indent: 0, fragments: [] },
      {
        indent: 0,
        fragments: [
          { text: "class", tone: "keyword" },
          { text: " FeatureCubit ", tone: "type" },
          { text: "extends", tone: "keyword" },
          { text: " Cubit<FeatureState> {", tone: "plain" },
        ],
      },
      {
        indent: 1,
        fragments: [
          { text: "FeatureCubit", tone: "type" },
          { text: "(this.repository) : ", tone: "plain" },
          { text: "super", tone: "keyword" },
          { text: "(FeatureInitial());", tone: "plain" },
        ],
      },
      {
        indent: 1,
        fragments: [
          { text: "final", tone: "keyword" },
          { text: " Repository repository;", tone: "plain" },
        ],
      },
      {
        indent: 1,
        fragments: [
          { text: "Future", tone: "type" },
          { text: "<void> ", tone: "plain" },
          { text: "load", tone: "member" },
          { text: "() ", tone: "plain" },
          { text: "async", tone: "keyword" },
          { text: " {", tone: "plain" },
        ],
      },
      {
        indent: 2,
        fragments: [
          { text: "emit", tone: "member" },
          { text: "(FeatureLoading());", tone: "plain" },
        ],
      },
      {
        indent: 2,
        fragments: [
          { text: "final", tone: "keyword" },
          { text: " data = ", tone: "plain" },
          { text: "await", tone: "keyword" },
          { text: " repository.", tone: "plain" },
          { text: "load", tone: "member" },
          { text: "();", tone: "plain" },
        ],
      },
      {
        indent: 2,
        fragments: [
          { text: "emit", tone: "member" },
          { text: "(FeatureLoaded(data));", tone: "plain" },
        ],
      },
      { indent: 1, fragments: [{ text: "}", tone: "plain" }] },
      { indent: 0, fragments: [{ text: "}", tone: "plain" }] },
    ],
  },
  philosophy: {
    heading: "Engineering approach",
    text: "Build cross-platform Flutter applications with maintainable architecture, clear separation of concerns, and reliable API integration.",
  },
  focusAreas: [
    { value: "Flutter & Dart", label: "Cross-platform mobile" },
    { value: "BLoC / MVVM", label: "State & architecture" },
    { value: "REST APIs", label: "Connected applications" },
  ],
};

export default behindCode;
