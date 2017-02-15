import React from 'react';
import { shallow, mount } from 'enzyme';
import MessageList from './MessageList';

const messageList = {
  messages: [],
  openImage: jest.fn()
};

it('renders without crashing', () => {
  const wrapper = mount(
    <MessageList { ...messageList } />
  );

  expect(wrapper.html()).toBe(null);

  wrapper.props().openImage();
  expect(messageList.openImage.mock.calls.length).toBe(1);
});

it('renders messages', () => {
  const wrapper = shallow(
    <MessageList { ...messageList }
                 messages={ getMockMessages() } />
  );

  expect(wrapper.hasClass('message-list')).toBe(true);
  expect(wrapper.find('li').length).toBe(1);
});

it('renders client or server messages', () => {
  const wrapper = shallow(
    <MessageList { ...messageList }
                 messages={ getMockMessages(null, { type: 'server' }) } />
  );

  expect(wrapper.find('li').length).toBe(2);
  expect(wrapper.find('.message-client').length).toBe(1);
  expect(wrapper.find('.message-server').length).toBe(1);
});

it('renders visible messages', () => {
  const wrapper = shallow(
    <MessageList { ...messageList } />
  );

  wrapper.setProps({ messages: getMockMessages({ is_typing: true }) });
  expect(wrapper.find('.message-client-visible').length).toBe(1);

  wrapper.setProps({ messages: getMockMessages({ is_visible: true }) });
  expect(wrapper.find('.message-client-visible').length).toBe(1);
});

it('renders multiline messages', () => {
  const wrapper = shallow(
    <MessageList { ...messageList } />
  );

  wrapper.setProps({ messages: getMockMessages({ projects: getMockProjects(), is_visible: true }) });
  expect(wrapper.find('.message-multiline').length).toBe(1);

  wrapper.setProps({ messages: getMockMessages({ ...getMockIframe(), is_visible: true }) });
  expect(wrapper.find('.message-multiline').length).toBe(1);
});

it('renders 3 or 4 projects messages', () => {
  const wrapper = shallow(
    <MessageList { ...messageList } />
  );

  wrapper.setProps({ messages: getMockMessages({ projects: getMockProjects(3), is_visible: true }) });
  expect(wrapper.find('.message-array-three').length).toBe(1);

  wrapper.setProps({ messages: getMockMessages({ projects: getMockProjects(4), is_visible: true }) });
  expect(wrapper.find('.message-array-four').length).toBe(1);
});

function getMockMessage(message = {}) {
  return {
    type: 'client',
    content: 'test message',
    ...message
  };
}

function getMockMessages(...messages) {
  if (messages.length === 0) {
    messages.unshift(null);
  }

  return messages.map(message => getMockMessage(message));
}

function getMockProject(project = {}) {
  return {
    link: 'test project link',
    image_url: 'test project image url',
    content: 'test project name',
    ...project
  };
}

function getMockProjects(number = 1) {
  let projects = [];

  for (let i = 1; i <= number; i++) {
    projects = [...projects, i];
  }

  return projects.map(project => getMockProject(
    projects.length === 1 ? null : { content: `test project ${project}` }
  ));
}

function getMockIframe() {
  return {
    content: 'test iframe url',
    is_iframe: true
  };
}
