/*
 * Copyright 2022 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  getDateColumn,
  getDashboardNameColumn
} from '../CustomDashboardListUtils';

describe('CustomDashboard list utils tests', () => {
  it('get CustomDashboard name column', () => {
    const result = getDashboardNameColumn(jest.fn());
    expect(result.label).toEqual('Name');
    expect(result.path).toEqual('name');
  });
  it('get CustomDashboard date column', () => {
    const result = getDateColumn('lastModified', 'Last Modified');
    expect(result.label).toEqual('Last Modified');
    expect(result.path).toEqual('lastModified');
  });
});
