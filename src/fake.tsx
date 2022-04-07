import React, { FunctionComponent } from 'react';
import { Action, ActionPanel, Clipboard, List, showHUD } from "@raycast/api";
import { NameList } from './sub-lists';

const Fake: FunctionComponent = () => {
	// await showHUD(`Hey there ${ faker.name.findName() }`);
	//
	// return null

	const copyToClipboard = async (value: string) => {
		await Clipboard.copy(value);
		await showHUD(`Copied "${ value }" to clipboard!"`)
	}

	return (
		<List>
			<List.Item
				title="Name"
				// subtitle={`e.g. "${ faker.name.firstName() }"`}
				actions={
					<ActionPanel>
						<Action.Push
							title="Name"
							target={<NameList onCopyAction={copyToClipboard} />}
						/>
					</ActionPanel>
				}
			/>
		</List>
	);
}

export default Fake
