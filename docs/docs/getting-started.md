---
sidebar_position: 1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Getting Started

## Installation

### Step 1: Install the packages

- Install **rn-nativeflow**

<Tabs groupId="select">
  <TabItem value="npm" label="npm">
  ```bash
    npm install rn-nativeflow
  ```
  </TabItem>
  <TabItem value="yarn" label="yarn">
   ```bash
    npm install rn-nativeflow
   ```
  </TabItem>
</Tabs>

- Install **react native reanimated**

<Tabs groupId="select">
  <TabItem value="npm" label="npm">
  ```bash
    npm install react-native-reanimated
  ```
  </TabItem>
  <TabItem value="yarn" label="yarn">
   ```bash
    yarn add react-native-reanimated
   ```
  </TabItem>
</Tabs>

- Install react **native gesture handler**

<Tabs groupId="select">
  <TabItem value="npm" label="npm">
  ```bash
    npm install react-native-gesture-handler
  ```
  </TabItem>
  <TabItem value="yarn" label="yarn">
   ```bash
    yarn add react-native-gesture-handler
   ```
  </TabItem>
</Tabs>


### Step 2: Add Reanimated's babel plugin

Add `react-native-reanimated/plugin` plugin to your babel.config.js

```js title="babel.config.js"
module.exports = {
  presets: [
    ... // don't add it here :)
  ],
  plugins: [
    ...
    // highlight-start
    'react-native-reanimated/plugin',
    // highlight-end
  ],
};
```

### Step 3: Clear Metro bundler cache (recommended)

<Tabs groupId="select">
  <TabItem value="expo" label="expo">
  ```bash
    npx expo start -c
  ```
    </TabItem>
  <TabItem value="npm" label="npm">
  ```bash
    npm start -- --reset-cache
  ```
  </TabItem>
  <TabItem value="yarn" label="yarn">
   ```bash
   yarn start --reset-cache
   ```
  </TabItem>
</Tabs>
