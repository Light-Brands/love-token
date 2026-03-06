# Love Token Tokenomics

## Overview

Love Token implements a **dual-currency economy** where meditation generates measurable economic value. The system currently operates as a centralized ledger (Phase 1 MVP) with plans to migrate to blockchain in future phases.

---

## Two Currencies

### Love Points (LP) - Global Recognition

| Property | Detail |
|----------|--------|
| Audience | Anyone, no registration required |
| Earning | 1 LP per completed 2:22 min session + 1 LP per additional minute |
| Transferable | No |
| Economic value | None - recognition and engagement tracking only |
| Cap | Unlimited |

**Example:** A 10-minute meditation earns 1 base + 7 bonus = **8 LP**.

### Love Credits (LVC) - Local Economic Currency

| Property | Detail |
|----------|--------|
| Audience | Verified Love Farmers in registered communities |
| Earning | 0.01 LVC per minute of meditation |
| Transferable | No (prevents secondary markets and speculation) |
| Economic value | Redeemable at local vendors for goods/services |
| Display | Shown in local currency equivalent (e.g., Rs.157) |
| Cap | Community-level ceiling tied to donor funding |

---

## Earning Mechanics

### Base Rates

- **Individual meditation:** 0.01 LVC/min + 10% individual bonus
- **Group meditation:** 0.01 LVC/min (logged by Love Farm Administrator)

### Streak Bonuses

| Streak | Bonus |
|--------|-------|
| 7-day | +50% on day 7 meditation |
| 30-day | +100% on day 30 meditation |
| Monthly consistency | +5% on all credits earned that month |

### Monthly Earning Examples

| Farmer Type | Activity | Estimated Earnings |
|-------------|----------|--------------------|
| Casual | 10 min/day x 30 days | ~3.5 LVC/month |
| Dedicated | 20 min/day x 30 days | ~8.5 LVC/month |
| Mixed (individual + group) | 15 min + 30 min daily | ~15 LVC/month |

---

## Economic Flow

```
Donors (monthly subscriptions)
        |
        v
  Liquidity Pool (backs all redemptions)
        |
        v
  Vendor Redemption Requests
        |
        v
  Vendor Payments (local currency)
        |
        v
  Credits Burned (permanently deleted)
```

---

## Stability Mechanisms

1. **Credit Ceiling** - Per-community cap calculated from donor funding levels, community size, and vendor capacity. Managed by TWGE admin.

2. **Non-Transferability** - Credits cannot move between farmers, forcing circulation through intended channels: earn, spend at vendors, vendor redeems.

3. **Burn on Redemption** - When vendors redeem credits for local currency, those credits are permanently destroyed, maintaining a proportional relationship between credits issued and donor backing.

4. **FX Management** - Internal USD peg for accounting consistency. Rates updated automatically twice daily. Farmers always see local currency values.

---

## Anti-Gaming Measures

- **Presence verification:** Intermittent thumb/finger hold requirement during meditation
- **Pattern analysis:** Anomaly detection for unusual earning patterns
- **Administrator attestation:** Group sessions verified by community-nominated admins
- **Random audits:** Periodic verification of logged sessions
- **Unique QR codes:** Per-transaction codes for vendor payments

---

## Participant Roles

| Role | Function |
|------|----------|
| Public User | Earns Love Points through meditation (no registration) |
| Donor | Funds liquidity pool via monthly subscription ($50/$100/custom, 12-month min) |
| Love Farmer | Earns and spends Love Credits in local community |
| Love Farm Admin | Verifies farmers, logs group meditations, onboards vendors |
| Vendor | Accepts Love Credits, redeems weekly/monthly for local currency |
| TWGE Admin | Central oversight: credit ceilings, FX rates, redemption approval |

---

## Energy Access Credits (EAC) - Secondary Layer

Community meditation aggregates into infrastructure milestones:

| EAC Threshold | Benefit Unlocked |
|---------------|------------------|
| 1,000 | Community Lighting |
| 2,500 | Charging Stations |
| 5,000 | Extended Power Hours |
| 10,000 | Clean Water Access |
| 25,000 | Food Refrigeration |

Group meditation earns 1.5x EAC multiplier. Special events earn 2x.

---

## Roadmap

| Phase | Focus |
|-------|-------|
| Phase 1 (Current) | MVP - Web app, centralized ledger, wallets, meditation tracking |
| Phase 2 | Donor subscriptions, vendor redemption system, impact dashboards |
| Phase 3 | Energy Access Credits, 50+ communities, advanced analytics |
| Phase 4 | **Love Coin** on blockchain, DAO governance, global marketplace |

---

## Design Principles

- Dignity over efficiency
- Simplicity over power
- Oversight over automation
- Trust over speed
- Community over individual
- Stability over growth
