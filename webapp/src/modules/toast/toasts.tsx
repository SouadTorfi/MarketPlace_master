import { Button, Icon, ToastType } from 'decentraland-ui'
import { Toast } from 'decentraland-dapps/dist/modules/toast/types'
import { t } from 'decentraland-dapps/dist/modules/translation/utils'
import { UpsertRentalOptType } from '../rental/types'
import { locations } from '../routing/locations'
import { NFT } from '../nft/types'

export function getStoreUpdateSuccessToast(): Omit<Toast, 'id'> {
  return {
    type: ToastType.INFO,
    title: t('toast.store_update_success.title'),
    body: t('toast.store_update_success.body'),
    timeout: 6000,
    closable: true
  }
}

export function getLandClaimedBackSuccessToast(): Omit<Toast, 'id'> {
  return {
    type: ToastType.INFO,
    title: t('toast.claim_land_success.title'),
    body: t('toast.claim_land_success.body'),
    timeout: 6000,
    closable: true
  }
}

export function getListingRemoveSuccessToast(): Omit<Toast, 'id'> {
  return {
    type: ToastType.INFO,
    title: t('toast.remove_listing_success.title'),
    body: t('toast.remove_listing_success.body'),
    timeout: 6000,
    closable: true
  }
}

export function getUpsertRentalSuccessToast(
  nft: NFT,
  type: UpsertRentalOptType
): Omit<Toast, 'id'> {
  return {
    type: ToastType.INFO,
    title:
      type === UpsertRentalOptType.INSERT
        ? t('toast.create_rental_success.title')
        : t('toast.update_rental_success.title'),
    body: (
      <div>
        <p>
          {type === UpsertRentalOptType.INSERT
            ? t('toast.create_rental_success.body')
            : t('toast.update_rental_success.body')}
        </p>
        <Button as={'a'} href={locations.nft(nft.contractAddress, nft.tokenId)}>
          {t('toast.upsert_rental_success.show_listing')}
        </Button>
      </div>
    ),
    timeout: 6000,
    closable: true
  }
}

export function getBuyNFTWithCardErrorToast(): Omit<Toast, 'id'> {
  return {
    type: ToastType.ERROR,
    title: t('toast.buy_nft_with_card_error.title'),
    body: (
      <div className="buy-nft-with-card-error">
        <p>{t('toast.buy_nft_with_card_error.body')}</p>
        <Button as="a" basic href={window.location.href}>
          {t('toast.buy_nft_with_card_error.refresh')}
        </Button>
      </div>
    ),
    closable: true,
    icon: <Icon name="exclamation circle" />
  }
}

export function getExcecuteOrderFailureToast(): Omit<Toast, 'id'> {
  return {
    type: ToastType.ERROR,
    title: t('toast.meta_transaction_failure.title'),
    body: (
        <p>{t('toast.meta_transaction_failure.body')}</p>
    ),
    icon: <Icon name="exclamation circle" />
  }
}
