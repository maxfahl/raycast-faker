import React, { FunctionComponent } from 'react';
import { CopyActionItem, SubListProps } from './index';
import { Action, ActionPanel, List } from '@raycast/api';
import { faker } from '@faker-js/faker';

const NameList: FunctionComponent<SubListProps> = ({ onCopyAction }) => {

	return (
		<List navigationTitle="Name">
			{ actions.map(({ name, generate, variations }) => (
				<List.Item
					key={ name }
					title={ name }
					actions={
						<ActionPanel>
							<Action
								title={ `Copy ${ name }` }
								onAction={ () => onCopyAction(generate()) }
							/>
							{ variations?.map(({name: variationName, args}) => (
								<Action
									key={`${name} ${variationName}`}
									title={ `Copy ${variationName} ${ name }` }
									onAction={ () => onCopyAction(generate(...args)) }
								/>
							)) }
						</ActionPanel>
					}
				/>
			)) }
		</List>
	)
}

const actions: CopyActionItem[] = [
	{
		name: 'First Name',
		generate: faker.name.firstName,
		variations: [
			{
				name: 'Male',
				args: ['male']
			},
			{
				name: 'Female',
				args: ['male']
			}
		]
	},
	{
		name: 'Last Name',
		generate: faker.name.lastName,
		variations: [
			{
				name: 'Male',
				args: ['male']
			},
			{
				name: 'Female',
				args: ['male']
			}
		]
	},
	{
		name: 'Full Name',
		generate: faker.name.findName,
		variations: [
			{
				name: 'Male',
				args: [undefined, undefined, 'male']
			},
			{
				name: 'Female',
				args: [undefined, undefined, 'male']
			}
		]
	},
	{
		name: 'Gender',
		generate: faker.name.gender,
		variations: [
			{
				name: 'Binary',
				args: ['binary']
			}
		]
	},
	{
		name: 'Prefix',
		generate: faker.name.prefix,
		variations: [
			{
				name: 'Male',
				args: ['male']
			},
			{
				name: 'Female',
				args: ['male']
			}
		]
	},
	{
		name: 'Suffix',
		generate: faker.name.suffix
	},
	{
		name: 'Title',
		generate: faker.name.title
	},
	{
		name: 'Job Title',
		generate: faker.name.jobTitle
	},
	{
		name: 'Job Descriptor',
		generate: faker.name.jobDescriptor
	},
	{
		name: 'Job Area',
		generate: faker.name.jobArea
	},
	{
		name: 'Job Type',
		generate: faker.name.jobType
	}
]

export default NameList




