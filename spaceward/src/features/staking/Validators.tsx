import { Icons } from "@/components/ui/icons-assets";
import { useQueryHooks } from "@/hooks/useClient";
import {
	BondStatus,
	Validator,
} from "@wardenprotocol/wardenjs/codegen/cosmos/staking/v1beta1/staking";
import clsx from "clsx";

interface ValidatorProps extends Validator {
	openStakeModal: (address: string) => void;
}

function ValidatorItem(props: ValidatorProps) {
	const status: BondStatus = props.status;
	console.log(props);

	return (
		<div className="grid grid-cols-[1fr_150px_150px_150px_200px] gap-3 h-[72px]  border-t-[1px] border-secondary-bg">
			<div className="flex items-center gap-3">
				<img
					src="/images/eth.png"
					alt=""
					className="w-10 h-10 object-contain"
				/>

				<div>
					{/* TODO proper title */}
					{props.description.moniker} {props.operatorAddress}
				</div>
			</div>

			<div className="flex flex-col justify-center">
				{(Number(props.commission.commissionRates.rate) * 100).toFixed(
					1,
				)}
				%
			</div>

			<div className="flex flex-col justify-center">100%</div>

			<div className="flex flex-col justify-center">
				<div className="flex items-center gap-1">
					<div
						className={clsx("w-[6px] h-[6px] rounded-full", {
							"bg-positive":
								status === BondStatus.BOND_STATUS_BONDED,
							"bg-negative":
								status !== BondStatus.BOND_STATUS_BONDED,
						})}
					/>
					{status === BondStatus.BOND_STATUS_BONDED
						? "Active"
						: // todo
							BondStatus[status]}
				</div>
			</div>

			<div
				className="flex items-center justify-end gap-1 cursor-pointer text-secondary-text"
				onClick={() => props.openStakeModal(props.operatorAddress)}
			>
				<div>
					{
						// TODO is it my stake or total stake?
						props.tokens
					}
				</div>
				<Icons.chevronRight />
			</div>

			{/* TODO when to show this button?
				<div className="flex items-center justify-end">
					<button
						onClick={() => {
							// setStakeModal(true);
						}}
						className="cursor-pointer bg-secondary-bg text-white py-[6px] px-4 rounded hover:bg-hover-bg ease-in duration-100"
					>
						Stake
					</button>
				</div>*/}
		</div>
	);
}

interface ValidatorsProps {
	openStakeModal: (address: string) => void;
}

export default function Validators(props: ValidatorsProps) {
	const {
		cosmos: {
			staking: { v1beta1: staking },
		},
	} = useQueryHooks();

	const query = staking.useValidators({
		request: {
			// @ts-expect-error string expected; fixme possible type bug
			status: BondStatus.BOND_STATUS_UNSPECIFIED,
		},
	});

	return (
		<div>
			{query.data?.validators.map((validator, i) => (
				<ValidatorItem
					{...validator}
					key={i}
					openStakeModal={props.openStakeModal}
				/>
			))}
		</div>
	);
}
