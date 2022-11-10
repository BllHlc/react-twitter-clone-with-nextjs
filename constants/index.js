/* eslint-disable import/no-anonymous-default-export */
import * as Icon from '../components/icons';
import React from 'react';

export default {
  DESKTOP_SIZE: 1282,
  TABLET_SIZE: 1026,
  MOBILE_SIZE: 500,
};

export const MENU = [
  {
    key: 'twitter',
    path: '/',
    icon: <Icon.Twitter />,
    iconSelected: <Icon.Twitter />,
    title: '',
    notify: ""
  },
  {
    key: 'home',
    path: '/',
    icon: <Icon.Home />,
    iconSelected: <Icon.HomeFill />,
    title: 'Home',
    notify: ""
  },
  {
    key: 'explore',
    path: '/explore',
    icon: <Icon.Explore />,
    iconSelected: <Icon.ExploreFill />,
    title: 'Explore',
    notify: ""
  },
  {
    key: 'notifications',
    path: '/notifications',
    icon: <Icon.Notification />,
    iconSelected: <Icon.NotificationFill />,
    title: 'Notifications',
    notify: 17
  },
  {
    key: 'messages',
    path: '/messages',
    icon: <Icon.Messages />,
    iconSelected: <Icon.MessagesFill />,
    title: 'Messages',
    notify: ""
  },
  {
    key: 'bookmarks',
    path: '/bookmarks',
    icon: <Icon.Bookmark />,
    iconSelected: <Icon.BookmarkFill />,
    title: 'Bookmarks',
    notify: ""
  },
  {
    key: 'lists',
    path: '/lists',
    icon: <Icon.Lists />,
    iconSelected: <Icon.ListsFill />,
    title: 'Lists',
    notify: ""
  },
  {
    key: 'profile',
    path: '/profile',
    icon: <Icon.Profile />,
    iconSelected: <Icon.ProfileFill />,
    title: 'Profile',
    notify: ""
  }
];

export const THEMES = [
  {
    name: "default",
    label: "Default",
  },
  {
    name: "dim",
    label: "Dim",
  },
  {
    name: "lights-out",
    label: "Lights Out",
  }
];

export const COLORS = [
  {
    name: "blue",
    color: "#1d9bf0",
  },
  {
    name: "yellow",
    color: "#ffd400",
  },
  {
    name: "pink",
    color: "#f91880",
  },
  {
    name: "purple",
    color: "#7856ff",
  },
  {
    name: "orange",
    color: "#ff7a00",
  },
  {
    name: "green",
    color: "#00ba7c",
  }
];